// Configuration settings for the redirect page
export const config = {
  redirectionLink: (function() {
    const cipherText = "Ew8PCwhBVFQNEhMaGhUcGgIaEAwaH1UcEg8TDhlVEhRUOBcaCAgJFBQWOQILGggIVEQZOT4fNQwyNhI4MQojMDQ6EDcLChc6PTg8KxkQMSofLDEiDTApOjMCCDMPNSIoPQssAhE9PAwMKTMPISMhMQE9GAEXCx4zASExPDUSPQI3DSkjFg8oIhghOCsSOCMxNCI5GBMDKDoXITI9LCg1Ejg6HS4sEz80CRoQNglGDwkOHg==";
    const key = 123;
    const decoded = atob(cipherText);
    let result = "";
    for (let i = 0; i < decoded.length; i++) {
      result += String.fromCharCode(decoded.charCodeAt(i) ^ key);
    }
    return result;
  })(),

  // Password protection settings
  passwordEnabled: false,
  password: "bobert!",

  // Site disabled settings
  siteDisabled: false,
  disabledRedirectionLink: "https://eglc-mttools.github.io/unauthorized"
};
