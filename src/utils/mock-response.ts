import { AboutMe } from '../model/aboutme';
import { Project } from '../model/project';

export const mockLogin = (userName: string, password: string) =>
  new Promise<TokenResponse>(function (resolve, rejected) {
    setTimeout(() => {
      if (userName === 'user@admin.com' && password === 'tomate') {
        resolve(
          JSON.parse(
            `{"token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODg0YmJiM2Q0YTRkNDk1ZDYyNGJhYyIsImVtYWlsIjoibHVjYXNmZXJuYW5kZXphcmFnb25AZ21haWwuY29tIiwiaWF0IjoxNjM2MzIyMzA3LCJleHAiOjE2MzYzMjU5MDd9.yxy7uKWXJx5rY8znRBTg5182llyH8Rs9R8C6_SM4LIg" }`
          )
        );
      } else {
        rejected(new Unauthorized());
      }
    }, 2000);
  });
export interface TokenResponse {
  token: string;
}
export interface ApiError {
  description?: string;
}
export class Unauthorized implements ApiError {}

export interface DashboardInfo {
  aboutMe: AboutMe;
  projects: Project[];
}

export const mockFetchDashboard = () =>
  Promise.all([mockAboutme(), mockProjects()]).then(([aboutMe, projects]) => {
    return {
      aboutMe,
      projects
    };
  });

export const mockAboutme = () =>
  new Promise<AboutMe>(function (resolve) {
    setTimeout(() => {
      resolve(
        JSON.parse(
          `{
            "id":"12389asdfasf8",
            "name":"Jordi Nadal Cantó",
            "birthday":208457700000,
            "nationality":"Spain",
            "job":"CTO Optima",
            "github":"https://github.com/LikiDev/"
            }`
        )
      );
    }, 500);
  });

export const mockProjects = () =>
  new Promise<Project[]>(function (resolve) {
    setTimeout(() => {
      resolve(
        JSON.parse(
          `[
                {
                "id":"12349as8df90",
                "title":"COBOL",
                "description":"Casi todos los sistemas que requieren gran capacidad de procesamiento por lotes en grandes empresas con sistemas mainframes utilizan COBOL.",
                "version":"7.1",
                "link":"https://www.ibm.com/docs/es/i/7.1?topic=languages-cobol",
                "tag":"Cobol, IBM, AS400",
                "timestamp":"765817712000"
                },
                {
                "id":"56765asdfasdf8",
                "title":"Styled components",
                "description":"Librería que permite usar template literals y css para crear estilos en componente con JavaScript",
                "version":"5.2.1",
                "link":"https://styled-components.com/docs",
                "tag":"CSS, JavaScript, Babel",
                "timestamp":"765817712002"
                },
                {
                "id":"56765asdfasdf8",
                "title":"React i18next",
                "description":"Internacionalización de nuestro proyecto en React.",
                "version":"19.9.2",
                "link":"https://react.i18next.com",
                "tag":"JavaScript, i18n, React",
                "timestamp":"765817712003"
                },
                {
                "id":"25634iuoasdf8",
                "title":"React Lottie",
                "description":"Animaciones en alta calidad que cuentan con distintos tipos de reproducción.",
                "version":"1.2.3",
                "link":"https://airbnb.design/lottie/",
                "tag":"Animation, React, Aribnb",
                "timestamp":"765817712004"
                },
                {
                "id":"7890asdf890",
                "title":"React Router",
                "description":"Navegación entre páginas dentro de nuestra web app.",
                "version":"5.2.0",
                "link":"https://reactrouter.com/web/guides/quick-start",
                "tag":"Navigation, routing",
                "timestamp":"765817712005"
                },
                {
                "id":"7890asdf890",
                "title":"Swagger",
                "description":"Herramienta para creación de especificaciones OpenAPI",
                "version":"3.0,2",
                "link":"https://swagger.io",
                "tag":"API, OpenAPI",
                "timestamp":"765817712006"
                },
                {
                "id":"7890asdf890",
                "title":"Figma",
                "description":"Herramienta de diseño vectorial y prototipado",
                "version":"-",
                "link":"https://www.figma.com/proto/3e43h8TrzwpjfKwXvFxZoP/Taller?page-id=144%3A51&node-id=308%3A1187&viewport=254%2C48%2C0.12&scaling=min-zoom&starting-point-node-id=147%3A3",
                "tag":"Vector, UX, UI",
                "timestamp":"765817712007"
                }
            ]`
        )
      );
    }, 500);
  });

  export function printProjectData() {
    mockProjects().then((projects) => {
      // Imprime los datos de los proyectos en la consola
      console.log(projects);
    });
  }