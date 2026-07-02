function analyzeValue(value) {
    return{
        input : value,
        type : typeof value,
        isTruthy : Boolean(value),
        isNullOrUnderfined : value === null || value === undefined,
        isReferenceType :
        (typeof value === "object" && value !== null) ||
      typeof value === "function",
    

    }
}

console.log(analyzeValue(null));
console.log(analyzeValue(undefined));
console.log(analyzeValue("hello"));
console.log(analyzeValue([1, 2, 3]));
console.log(analyzeValue(function() {}));
console.log(analyzeValue(NaN));