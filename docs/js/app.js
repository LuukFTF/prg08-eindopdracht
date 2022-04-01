import { DecisionTree } from "./libraries/decisiontree.js"
import { VegaTree } from "./libraries/vegatree.js"

const csvFile = "./data/choir_events_raw.csv"
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
    let trainData = data.slice(0, Math.floor(data.length * 0.8))
    let testData  = data.slice(Math.floor(data.length * 0.8) + 1)
    console.log("testData:", testData)
    console.log("trainData:", trainData)

    let decisionTree = new DecisionTree({
        ignoredAttributes: ignoredColumns,
        trainingSet: trainData,
        categoryAttr: trainingLabel
    })
    
    console.log(decisionTree.toJSON())

    let visual = new VegaTree('#view', 1200, 500, decisionTree.toJSON())

    // predictAll(decisionTree, testData)
}

loadData()