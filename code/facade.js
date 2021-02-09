// 外观模式
function lineUp() {
    console.log('排队.')
}
function checkIdentity(certifications, info) {
    console.log('检查身份信息.');
}
function getNewCertifications(info) {
    console.log('办理相关证件.');
}
function receiveMoney() {
    console.log('收钱.');
}

function signUp(certifications, money, info) {
    lineUp();
    checkIdentity(certifications, info);
    receiveMoney();
    getNewCertifications(info);
    receiveMoney();
    console.log('完成注册.');
}
signUp();