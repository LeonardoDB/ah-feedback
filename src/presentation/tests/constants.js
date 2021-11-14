const validToken = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoiNWMyNGZhMzVlZDJkZTcxNDA2OGI0NTc5IiwibGFzdENvbXBhbnkiOiJhNDIyMjk1IiwicGVyZmlsIjpmYWxzZSwiZXh0Ijp0cnVlfSwiZXhwIjoxNjM3NDE5NzU3fQ.UkgPi_DMn3B_o7MI625iXlXO4jDCTX5Sm2h3TlQmt_fJHB6oQU9SwoNOKX3ardlU5ktj0ROptVzMfklJO7GsBwhvB7eAx2rW9miF1vtSwzZ_JM6ASuBM1Jc2QQEy-jr_dBas6V3Vi168Ks3srLrPJ0v-Wpa2RHSWQy6HmkY7eELwB-ZmJiWqJ4dpkhKuK-Wx4fSa2Kh1HCrIROorzj_wnRRdl4Ltm_7to8qXDnQVi1VqXPgVOkxP7QmwQ4KL79M_lou47KMg5BJx-BPNB2vbyUyNJNNbWitrYF78p0lJO_1BqXaSiZEGY29cDSrKJ3woqVFxYCSLeXsEEAJCACeUEg`

const invalidToken = `Bearer blablabla`

const validComplimentPayload = {
    fromId: 'valid_fromId',
    fromName: 'valid_fromName',
    toId: 'valid_toId',
    toName: 'valid_toName',
    content: 'valid_content',
}

const validFeedbackPayload = {
    fromId: 'valid_fromId',
    fromName: 'valid_fromName',
    toId: 'valid_toId',
    toName: 'valid_toName',
    content: 'valid_content',
    stopDoing: false,
    keepDoing: true,
    needImprovement: false,
}
const invalidComplimentPayload = {
    fromId: 'valid_fromId',
    fromName: 'valid_fromName',
    toId: 'valid_toId',
    toName: 'valid_toName',
}

module.exports = {
    validToken,
    invalidToken,
    validFeedbackPayload,
    invalidComplimentPayload,
    validComplimentPayload,
}