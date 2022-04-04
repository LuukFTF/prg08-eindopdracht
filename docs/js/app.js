import { DecisionTree } from "./libraries/decisiontree.js"
import { VegaTree } from "./libraries/vegatree.js"

const csvFile = "./data/choir_events_processed.csv"
const trainingLabel = "lable"
const ignoredColumns = []

function loadData() {
    Papa.parse(csvFile, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: results => trainModel(results.data)
    })
}

function trainModel(data){
    data.sort(() => (Math.random() - 0.5))
    // let trainData = data
    let trainData = data.slice(0, Math.floor(data.length * 0.8))
    let testData  = data.slice(Math.floor(data.length * 0.8) + 1)
    console.log("testData:", testData)
    console.log("trainData:", trainData)

    let decisionTree = new DecisionTree({
        ignoredAttributes: ignoredColumns,
        trainingSet: trainData,
        categoryAttr: trainingLabel
    })
    
    // console.log(decisionTree.toJSON())

    let visual = new VegaTree('#view', 1800, 620, decisionTree.toJSON())

    predictInput(decisionTree)

    predictAll(decisionTree, testData)
    // predictOne(decisionTree, testData)
}

loadData()


function predictOne(decisionTree, testData){
    let prediction = decisionTree.predict(testData[0])

    if(prediction === testData[0].lable) {
        console.log("CORRECTE  VOORSPELLING!")
    } else {
        console.log("!incorrect")
    }

    console.log(prediction, testData[0].lable)
}


function predictAll(decisionTree, testData) {
    let amountCorrect = 0

    let predictedRActualR = 0
    let predictedRActualREC = 0
    let predictedRActualS = 0
    let predictedRActualP = 0
    let predictedRActualM = 0
    let predictedRActualF = 0

    let predictedRECActualR = 0
    let predictedRECActualREC = 0
    let predictedRECActualS = 0
    let predictedRECActualP = 0
    let predictedRECActualM = 0
    let predictedRECActualF = 0

    let predictedSActualR = 0
    let predictedSActualREC = 0
    let predictedSActualS = 0
    let predictedSActualP = 0
    let predictedSActualM = 0
    let predictedSActualF = 0

    let predictedPActualR = 0
    let predictedPActualREC = 0
    let predictedPActualS = 0
    let predictedPActualP = 0
    let predictedPActualM = 0
    let predictedPActualF = 0

    let predictedMActualR = 0
    let predictedMActualREC = 0
    let predictedMActualS = 0
    let predictedMActualP = 0
    let predictedMActualM = 0
    let predictedMActualF = 0

    let predictedFActualR = 0
    let predictedFActualREC = 0
    let predictedFActualS = 0
    let predictedFActualP = 0
    let predictedFActualM = 0
    let predictedFActualF = 0


    for(let testItem of testData) {
        let prediction = decisionTree.predict(testItem) 

        if(prediction === testItem.lable) {
            amountCorrect++
        }



        if(prediction == "rehearsal" && testItem.lable == "rehearsal") { predictedRActualR++ }
        if(prediction == "rehearsal" && testItem.lable == "recording") { predictedRActualREC++ }
        if(prediction == "rehearsal" && testItem.lable == "show") { predictedRActualS++ }
        if(prediction == "rehearsal" && testItem.lable == "preparation") { predictedRActualP++ }
        if(prediction == "rehearsal" && testItem.lable == "meeting") { predictedRActualM++ }
        if(prediction == "rehearsal" && testItem.lable == "festival") { predictedRActualF++ }

        if(prediction == "recording" && testItem.lable == "rehearsal") {    predictedRECActualR++ }
        if(prediction == "recording" && testItem.lable == "recording") {    predictedRECActualREC++ }
        if(prediction == "recording" && testItem.lable == "show") {         predictedRECActualS++ }
        if(prediction == "recording" && testItem.lable == "preparation") {  predictedRECActualP++ }
        if(prediction == "recording" && testItem.lable == "meeting") {      predictedRECActualM++ }
        if(prediction == "recording" && testItem.lable == "festival") {     predictedRECActualF++ }

        if(prediction == "show" && testItem.lable == "rehearsal") {    predictedSActualR++ }
        if(prediction == "show" && testItem.lable == "recording") {    predictedSActualREC++ }
        if(prediction == "show" && testItem.lable == "show") {         predictedSActualS++ }
        if(prediction == "show" && testItem.lable == "preparation") {  predictedSActualP++ }
        if(prediction == "show" && testItem.lable == "meeting") {      predictedSActualM++ }
        if(prediction == "show" && testItem.lable == "festival") {     predictedSActualF++ }

        if(prediction == "preparation" && testItem.lable == "rehearsal") {    predictedPActualR++ }
        if(prediction == "preparation" && testItem.lable == "recording") {    predictedPActualREC++ }
        if(prediction == "preparation" && testItem.lable == "show") {         predictedPActualS++ }
        if(prediction == "preparation" && testItem.lable == "preparation") {  predictedPActualP++ }
        if(prediction == "preparation" && testItem.lable == "meeting") {      predictedPActualM++ }
        if(prediction == "preparation" && testItem.lable == "festival") {     predictedPActualF++ }

        if(prediction == "meeting" && testItem.lable == "rehearsal") {    predictedMActualR++ }
        if(prediction == "meeting" && testItem.lable == "recording") {    predictedMActualREC++ }
        if(prediction == "meeting" && testItem.lable == "show") {         predictedMActualS++ }
        if(prediction == "meeting" && testItem.lable == "preparation") {  predictedMActualP++ }
        if(prediction == "meeting" && testItem.lable == "meeting") {      predictedMActualM++ }
        if(prediction == "meeting" && testItem.lable == "festival") {     predictedMActualF++ }

        if(prediction == "festival" && testItem.lable == "rehearsal") {    predictedFActualR++ }
        if(prediction == "festival" && testItem.lable == "recording") {    predictedFActualREC++ }
        if(prediction == "festival" && testItem.lable == "show") {         predictedFActualS++ }
        if(prediction == "festival" && testItem.lable == "preparation") {  predictedFActualP++ }
        if(prediction == "festival" && testItem.lable == "meeting") {      predictedFActualM++ }
        if(prediction == "festival" && testItem.lable == "festival") {     predictedFActualF++ }

    }

    let accuracy = amountCorrect / testData.length

    console.log(testData, amountCorrect)

    console.log("The Accuracy is: " + Math.round(accuracy*10000 *100, 4) /10000 + "%")

    generateConfusionMatrix(
        predictedRActualR,
        predictedRActualREC,
        predictedRActualS,
        predictedRActualP,
        predictedRActualM,
        predictedRActualF,
        predictedRECActualR,
        predictedRECActualREC,
        predictedRECActualS,
        predictedRECActualP,
        predictedRECActualM,
        predictedRECActualF,
        predictedSActualR,
        predictedSActualREC,
        predictedSActualS,
        predictedSActualP,
        predictedSActualM,
        predictedSActualF,
        predictedPActualR,
        predictedPActualREC,
        predictedPActualS,
        predictedPActualP,
        predictedPActualM,
        predictedPActualF,
        predictedMActualR,
        predictedMActualREC,
        predictedMActualS,
        predictedMActualP,
        predictedMActualM,
        predictedMActualF,
        predictedFActualR,
        predictedFActualREC,
        predictedFActualS,
        predictedFActualP,
        predictedFActualM,
        predictedFActualF
    )

}



function generateConfusionMatrix(
    predictedRActualR,
    predictedRActualREC,
    predictedRActualS,
    predictedRActualP,
    predictedRActualM,
    predictedRActualF,
    predictedRECActualR,
    predictedRECActualREC,
    predictedRECActualS,
    predictedRECActualP,
    predictedRECActualM,
    predictedRECActualF,
    predictedSActualR,
    predictedSActualREC,
    predictedSActualS,
    predictedSActualP,
    predictedSActualM,
    predictedSActualF,
    predictedPActualR,
    predictedPActualREC,
    predictedPActualS,
    predictedPActualP,
    predictedPActualM,
    predictedPActualF,
    predictedMActualR,
    predictedMActualREC,
    predictedMActualS,
    predictedMActualP,
    predictedMActualM,
    predictedMActualF,
    predictedFActualR,
    predictedFActualREC,
    predictedFActualS,
    predictedFActualP,
    predictedFActualM,
    predictedFActualF
) {
    const ELpredictedRActualR      = document.getElementById('predictedRActualR')
    const ELpredictedRActualREC      = document.getElementById('predictedRActualREC')
    const ELpredictedRActualS        = document.getElementById('predictedRActualS')
    const ELpredictedRActualP        = document.getElementById('predictedRActualP')
    const ELpredictedRActualM        = document.getElementById('predictedRActualM')
    const ELpredictedRActualF        = document.getElementById('predictedRActualF')
    const ELpredictedRECActualR      = document.getElementById('predictedRECActualR')
    const ELpredictedRECActualREC    = document.getElementById('predictedRECActualREC')
    const ELpredictedRECActualS      = document.getElementById('predictedRECActualS')
    const ELpredictedRECActualP      = document.getElementById('predictedRECActualP')
    const ELpredictedRECActualM      = document.getElementById('predictedRECActualM')
    const ELpredictedRECActualF      = document.getElementById('predictedRECActualF')
    const ELpredictedSActualR        = document.getElementById('predictedSActualR')
    const ELpredictedSActualREC      = document.getElementById('predictedSActualREC')
    const ELpredictedSActualS        = document.getElementById('predictedSActualS')
    const ELpredictedSActualP        = document.getElementById('predictedSActualP')
    const ELpredictedSActualM        = document.getElementById('predictedSActualM')
    const ELpredictedSActualF        = document.getElementById('predictedSActualF')
    const ELpredictedPActualR        = document.getElementById('predictedPActualR')
    const ELpredictedPActualREC      = document.getElementById('predictedPActualREC')
    const ELpredictedPActualS        = document.getElementById('predictedPActualS')
    const ELpredictedPActualP        = document.getElementById('predictedPActualP')
    const ELpredictedPActualM        = document.getElementById('predictedPActualM')
    const ELpredictedPActualF        = document.getElementById('predictedPActualF')
    const ELpredictedMActualR        = document.getElementById('predictedMActualR')
    const ELpredictedMActualREC      = document.getElementById('predictedMActualREC')
    const ELpredictedMActualS        = document.getElementById('predictedMActualS')
    const ELpredictedMActualP        = document.getElementById('predictedMActualP')
    const ELpredictedMActualM        = document.getElementById('predictedMActualM')
    const ELpredictedMActualF        = document.getElementById('predictedMActualF')
    const ELpredictedFActualR        = document.getElementById('predictedFActualR')
    const ELpredictedFActualREC      = document.getElementById('predictedFActualREC')
    const ELpredictedFActualS        = document.getElementById('predictedFActualS')
    const ELpredictedFActualP        = document.getElementById('predictedFActualP')
    const ELpredictedFActualM        = document.getElementById('predictedFActualM')
    const ELpredictedFActualF        = document.getElementById('predictedFActualF')

    ELpredictedRActualR.innerText = predictedRActualR
    ELpredictedRActualREC.innerText = predictedRActualREC
    ELpredictedRActualS.innerText = predictedRActualS
    ELpredictedRActualP.innerText = predictedRActualP
    ELpredictedRActualM.innerText = predictedRActualM
    ELpredictedRActualF.innerText = predictedRActualF
    ELpredictedRECActualR.innerText = predictedRECActualR
    ELpredictedRECActualREC.innerText = predictedRECActualREC
    ELpredictedRECActualS.innerText = predictedRECActualS
    ELpredictedRECActualP.innerText = predictedRECActualP
    ELpredictedRECActualM.innerText = predictedRECActualM
    ELpredictedRECActualF.innerText = predictedRECActualF
    ELpredictedSActualR.innerText = predictedSActualR
    ELpredictedSActualREC.innerText = predictedSActualREC
    ELpredictedSActualS.innerText = predictedSActualS
    ELpredictedSActualP.innerText = predictedSActualP
    ELpredictedSActualM.innerText = predictedSActualM
    ELpredictedSActualF.innerText = predictedSActualF
    ELpredictedPActualR.innerText = predictedPActualR
    ELpredictedPActualREC.innerText = predictedPActualREC
    ELpredictedPActualS.innerText = predictedPActualS
    ELpredictedPActualP.innerText = predictedPActualP
    ELpredictedPActualM.innerText = predictedPActualM
    ELpredictedPActualF.innerText = predictedPActualF
    ELpredictedMActualR.innerText = predictedMActualR
    ELpredictedMActualREC  .innerText = predictedMActualREC
    ELpredictedMActualS.innerText = predictedMActualS
    ELpredictedMActualP.innerText = predictedMActualP
    ELpredictedMActualM.innerText = predictedMActualM
    ELpredictedMActualF.innerText = predictedMActualF
    ELpredictedFActualR.innerText = predictedFActualR
    ELpredictedFActualREC  .innerText = predictedFActualREC
    ELpredictedFActualS.innerText = predictedFActualS
    ELpredictedFActualP.innerText = predictedFActualP
    ELpredictedFActualM.innerText = predictedFActualM
    ELpredictedFActualF.innerText = predictedFActualF

}


function predictInput(decisionTree){
    // let prediction = decisionTree.predict({
    //     "title": "",
    //     "location": "cascade",
    //     "city": "hendrik-ido-ambacht",
    //     "date": "thursday",
    //     "start_time": "19.75",
    //     "end_time": "22.25",
    //     "team": "all"
    // })

    let prediction = decisionTree.predict({
        "title": "",
        "location": "",
        "city": "rotterdam",
        "date": "saturday",
        "start_time": "16",
        "end_time": "18",
        "team": "[all, audience]"
    })
    
    console.log(`this event is a ${prediction}`)
}