
const reminderUnitReturnVal = (unit,value) =>{
    if (unit === "minutes") return value * 60 * 1000;
    if (unit === "hours") return value * 60 * 60 * 1000;
    if (unit === "days") return value * 24 * 60 * 60 * 1000;

    throw new Error("Invalid reminder interval unit");
}

export default reminderUnitReturnVal;