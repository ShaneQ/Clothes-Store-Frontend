import { KeycloakConfig } from 'keycloak-angular';

const keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8083/auth',
  realm: 'secondClosetClub',
  clientId: 'frontEnd'
};

export const environment = {
  production: false,
  assets: {
    dotaImages: 'https://cdn-keycloak-angular.herokuapp.com/assets/images/dota-heroes/'
  },
  keycloakConfig
};
