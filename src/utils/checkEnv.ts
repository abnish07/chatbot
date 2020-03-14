import config, { apiBaseEndpoint } from "../config";

export function checkEnvVariablesExits() {
    if (!config.apiBaseEndpoint) {
      throw new Error(`apiBaseEndpoint is "${apiBaseEndpoint}" in env variables.\nPlease add apiBaseEndpoint in environment Variables file.`)
    }
}