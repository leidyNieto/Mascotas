
exports.sendSMS = async (numero_dueño) => {
    let code = Math.random(10);
    console.log (`Sending SMS with code ${code} with phone number ${numero_dueño}`);
}