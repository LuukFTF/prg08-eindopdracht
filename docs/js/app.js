import { DecisionTree } from "./libraries/decisiontree.js"

const csvFile = "../data/choir_events_processed.csv"
const trainingLabel = "lable"
const ignoredColumns = []

const form = document.getElementById("eventform")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    dataProcess(form)
})

function dataProcess() {
    let processed = []
    processed.start_time = timeStringToFloat(form.start_time.value)
    processed.end_time = timeStringToFloat(form.end_time.value)
    processed.date = dateToWeekday(form.date.value)

    console.log(form.title.value, form.date.value, processed.date, form.start_time.value, processed.start_time, form.end_time.value, processed.end_time, form.team.value, form.location.value, form.city.value)

    let prediction = loadAlgoritm(form, processed)

    console.log(prediction)
}        
        

function dateToWeekday(date) {
    const weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
    let eventDate = new Date(date) 
    let eventDay = weekday[eventDate.getDay()];
    return eventDay   
}


function timeStringToFloat(time) {
    if (time != undefined && time != "" && time != "null") {
        let hoursMinutes = time.split(/[.:]/);
        let hours = parseInt(hoursMinutes[0], 10);
        let minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
        return hours + minutes / 60;
    }
}


function loadAlgoritm(form, processed) {
    Papa.parse(csvFile, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: results => trainModelFull(results.data, form, processed)
    })
}

function trainModelFull(data, form, processed){
    let decisionTree = new DecisionTree({
        ignoredAttributes: ignoredColumns,
        trainingSet: data,
        categoryAttr: trainingLabel
    })

    predictInput(decisionTree, form, processed)
}


function predictInput(decisionTree, form, processed){
    let prediction = decisionTree.predict({
        // "title": form.title.value,
        "location": form.location.value,
        "city": form.city.value,
        "date": processed.date,
        "start_time": processed.start_time,
        "end_time": processed.end_time,
        // "team": form.team.value
    })

    console.log(`this event is a ${prediction}`)

    form.lable.value = prediction

    updateLableColor()
}


function updateLableColor() {
    const topbar = document.getElementById("topbar")

    switch (form.lable.value) {
        case 'rehearsal':
            topbar.className = `${topbar.className} lable_r`
            break;
        case 'recording':
            topbar.className = `${topbar.className} lable_rec`
            break;
        case 'show':
            topbar.className = `${topbar.className} lable_s`
            break;
        case 'preparation':
            topbar.className = `${topbar.className} lable_p`
            break;
        case 'meeting':
            topbar.className = `${topbar.className} lable_m`
            break;
        case 'festival':
            topbar.className = `${topbar.className} lable_f`
            break;
        default:
            break;
      }
}