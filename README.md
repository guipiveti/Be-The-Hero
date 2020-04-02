[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=F2TW6JW3DRDE2&source=url)
<p align="center">
  <img alt="Be The Hero" src="frontend/src/assets/logo.svg"/>
</p>

## :file_folder: The Project
Project developed during the 11th OmniStack Week promoted by [Rocketseat](https://github.com/Rocketseat). **Be The Hero** allows Non-Governmental Organization to share their incidents and find interested on helping them. The software implements a web interface where each NGO may manage their incidents. The mobile app is created for the general user see the registered incidents and contact the organization via email or WhatsApp. The system works with an REST API on the Back-End that communicates with the Front-End and the SQL database.

### :chart_with_upwards_trend: Extras
The project includes the i18n package to allow use in different languages. The application checks the device's language and displays the translated version, when available. If the device`s language is not available, use English version will be used.
The server also has an integration with **IBM Watson** translation API. When the server receives an Incedent request it sends a response with the title and description translated to the requested language.

## :rocket: Technologies
|   Back-End   |            Web  |    Mobile        |
| :---:        |     :---:       |        :---:     |
| Node.js      | ReactJS         | React Native     |
| SQLite       | Axios           |  Axios           |
| Nodemon      |                 |  Expo            |
| Axios        |                 |  i18n            |
| Jest         |                 | **IBM Watson**   |
| Cors         |                 |                  |
| Express.js   |                 |                  |
| Knex         |                 |                  |

## :camera: Screenshots:
|                           Web                              |                               Mobile                                   |
| :---:                                                      |                                                          :---:         |
| ![Logon](.github/Images/Web_Logon.png)Login page           |![Casos Registrados](.github/Images/Mob_Incidents.jpeg)List of Incidents|
| ![Cadastro da ONG](.github/Images/Web_Cad.png)Register page|![Detalhes do Caso](.github/Images/Mob_Detail.jpeg)Details page         |
| ![Novo Incidente](.github/Images/Web_Add_Inc.png)Add Incident page|                                                                 |
| ![Gerenciamento](.github/Images/Web_Man.png)Incidents management  page|                                                             |

## :computer: Installation
### Running the **Back-End**:
Before running the Back-End you should register to IBM Watson and subscribe to a Language Translator Service API. (The Lite plan is free and has a quota of 1000000 characters/month).

Now you should **rename** the **.env.example** file to **.env** and inserting your API Key inside the file.
Finally run the following commands:
```bash
cd backend
npm install
npm start
```
___
### Running the **Web Front-End**:
```bash
cd frontend
yarn install
yarn start
```
The web project will start running on `localhost:3000`.  
___
### Running the **Mobile App**:
Edit the `src/services/api.js` file using you Back-End server/computer IP:
```
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://your-server-ip-goes-here:3333'
})
export default api;
```

```bash
cd mobile
npm start
```
You may now use an emulator or your physical device to test the app. You must download *Expo* app from Play Store or App Store then scan the generated QR code.
___
