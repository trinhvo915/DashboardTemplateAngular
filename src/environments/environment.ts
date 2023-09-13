export const environment = {
  production: false,
  keycloak : {
      issuer: 'http://localhost:8024/auth/realms/economy-platform',
      redirectUri: window.location.origin + "/heroes",
      clientId: 'admin-management-ui',
      clientSecret: 'aS5vlQxX1dwRgdrVTpMn1KouzynZbTJf',
      scope: 'openid profile email offline_access',
      responseType: 'code',
      requireHttps: false,
      disableAtHashCheck: true,
      showDebugInformation: true
  }
};

