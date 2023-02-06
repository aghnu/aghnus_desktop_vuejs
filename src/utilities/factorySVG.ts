import { AppName } from "../types/TypeApp";

export interface AppIconStyle {
  size: string;
  color: string;
}
export type AppIconHTML = string;

export function getAppIcon(name: AppName, style: AppIconStyle): AppIconHTML {
  const lookup: Record<AppName, (style: AppIconStyle) => AppIconHTML> = {
    terminal: getAppIconTerminal,
    github: getAppIconGithub,
    linkedin: getAppIconLinkedin,
  };

  return lookup[name](style);
}

export function getAppIconTerminal(style: AppIconStyle): AppIconHTML {
  return `
    <svg height="${style.size}" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.80355 40L5.00396 37.248L17.4616 24.9981L5 12.752L7.7996 10L23.0607 24.9981L7.80355 40ZM46 38.622H26.2009V34.7295H46V38.622Z" fill="${style.color}"/>
    </svg>
  `;
}

export function getAppIconGithub(style: AppIconStyle): AppIconHTML {
  return `
    <svg height="${style.size}" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <path d="M41.5988 12.2257C42.5288 8.89323 41.1338 5.25073 41.0563 5.01823C40.8238 4.47573 40.2813 4.01073 39.6613 4.01073C39.5063 4.01073 35.9413 3.70073 32.3763 6.41323C29.5863 5.87073 26.4088 5.71573 26.2538 5.71573C26.1763 5.71573 26.1763 5.71573 26.0988 5.71573C25.9438 5.71573 22.7663 5.87073 19.9763 6.41323C16.4113 3.70073 12.8463 4.01073 12.6913 4.01073C12.0713 4.08823 11.5288 4.47573 11.2963 5.01823C11.2188 5.17323 9.74627 8.89323 10.7538 12.2257C8.97127 14.7057 7.57628 17.9607 8.81628 23.7732C9.97878 29.0432 14.3188 31.9882 18.8138 32.9957C18.4263 34.0807 18.2713 35.3982 18.1163 36.7932C16.2563 36.8707 15.0938 35.7857 13.4663 34.0807C12.0713 32.6082 10.5213 30.9032 7.96378 30.3607C7.11128 30.1282 6.25878 30.6707 6.02628 31.6007C5.87128 32.5307 6.41378 33.3832 7.34378 33.5382C8.81627 33.8482 9.82377 34.9332 11.0638 36.2507C12.6913 37.9557 14.5513 40.0482 17.8838 40.0482H17.9613C17.9613 41.8307 18.1163 43.5357 18.1938 44.9307C18.2713 45.8607 19.0463 46.4807 19.9763 46.4032C20.9063 46.3257 21.5263 45.5507 21.4488 44.6207C20.9838 39.3507 21.3713 33.7707 22.2238 32.9957C22.8438 32.6082 23.2313 31.9107 22.9988 31.1357C22.8438 30.4382 22.2238 29.8957 21.4488 29.8957C20.7513 29.8957 13.4663 29.5082 12.0713 23.0757C10.9088 17.8057 12.3813 15.4807 13.9313 13.6207C14.3188 13.1557 14.3963 12.4582 14.1638 11.8382C13.5438 10.5207 13.7763 8.66073 14.0863 7.42073C15.1713 7.57573 16.7988 8.04073 18.5038 9.51323C18.8913 9.90073 19.4338 9.97823 19.9763 9.90073C22.3788 9.28073 25.6338 9.12573 26.1763 9.12573C26.6413 9.12573 29.9738 9.28073 32.3763 9.90073C32.9188 10.0557 33.4613 9.90073 33.8488 9.51323C35.5538 8.04073 37.2588 7.57573 38.2663 7.42073C38.5763 8.58323 38.8088 10.4432 38.1888 11.8382C37.9563 12.3807 38.0338 13.0782 38.4213 13.6207C39.9713 15.4807 41.3663 17.8057 40.2813 23.0757C38.8863 29.5082 31.6013 29.8957 30.7488 29.9732C29.9738 29.9732 29.3538 30.5157 29.1988 31.2132C29.0438 31.9107 29.3538 32.6857 29.9738 33.0732C30.9038 33.8482 31.2913 39.3507 30.8263 44.6982C30.7488 45.6282 31.4463 46.4032 32.2988 46.4807C32.3763 46.4807 32.3763 46.4807 32.4538 46.4807C33.3063 46.4807 34.0038 45.8607 34.0813 45.0082C34.3913 41.5982 34.6238 36.3282 33.5388 32.9957C38.0338 32.0657 42.3738 29.0432 43.5363 23.7732C44.7763 17.9607 43.4588 14.7057 41.5988 12.2257Z" fill="${style.color}"/>
    </svg>
  `;
}

export function getAppIconLinkedin(style: AppIconStyle): AppIconHTML {
  return `
    <svg height="${style.size}" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.4857 19.4457C26.3721 17.5182 28.8283 16.2571 31.6857 16.2571C34.6865 16.2571 37.5643 17.4492 39.6861 19.571C41.808 21.6929 43 24.5707 43 27.5714V43H38.8857V27.5714C38.8857 25.6619 38.1271 23.8305 36.7769 22.4803C35.4266 21.13 33.5953 20.3714 31.6857 20.3714C29.7762 20.3714 27.9448 21.13 26.5945 22.4803C25.2443 23.8305 24.4857 25.6619 24.4857 27.5714V43H20.3714V17.2857H24.4857V19.4457ZM10.0857 13.1714C9.26733 13.1714 8.48247 12.8463 7.90378 12.2676C7.3251 11.689 7 10.9041 7 10.0857C7 9.26733 7.3251 8.48247 7.90378 7.90378C8.48247 7.3251 9.26733 7 10.0857 7C10.9041 7 11.689 7.3251 12.2676 7.90378C12.8463 8.48247 13.1714 9.26733 13.1714 10.0857C13.1714 10.9041 12.8463 11.689 12.2676 12.2676C11.689 12.8463 10.9041 13.1714 10.0857 13.1714ZM8.02857 17.2857H12.1429V43H8.02857V17.2857Z" fill="${style.color}"/>
    </svg>
  `;
}
