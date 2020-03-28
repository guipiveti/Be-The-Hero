[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=F2TW6JW3DRDE2&source=url)
<p align="center"> 
  <img alt="Be The Hero" src="frontend/src/assets/logo.svg"/>
</p>

## :file_folder: The Project
Project develloped during the 11th Omnistack Week promoted by [Rocketseat](https://github.com/Rocketseat). **Be The Hero** allows Non-Governmental Organization to share their incidents and find interested on helping them. The software implements a web interface where each NGO may manage their incidents. The mobile app is created for the general user see the registered incidents and contact the organization via email or Whatsapp. The system works with an REST API on the Back-End that communicates with the Front-End and the SQL database.
## :rocket: Technologies
|   Back-End   |            Web  |    Mobile    |
| :---:        |     :---:       |        :---: |
| Node.js      | ReactJS         | React Native |
| SQLite       |                 | Expo         |
| Nodemon      |                 |              |
| Axios        |                 |              |
| Jest         |                 |              |
| Cors         |                 |              |
| Express.js   |                 |              |
| Knex         |                 |              |

## :camera: Screenshots:
|                           Web                              |                               Mobile                                   |
| :---:                                                      |                                                          :---:         |
| ![Logon](.github/Images/Web_Logon.png)Login page           |![Casos Registrados](.github/Images/Mob_Incidents.jpeg)List of Incidents|
| ![Cadastro da ONG](.github/Images/Web_Cad.png)Register page|![Detalhes do Caso](.github/Images/Mob_Detail.jpeg)Details page         |
| ![Novo Incidente](.github/Images/Web_Add_Inc.png)Add Incident page|                                                                 |
| ![Gerenciamento](.github/Images/Web_Man.png)Incidents mangenement page|                                                             |

## :computer: Installation
### Running the **Backend**:
```bash
cd backend
npm install
npm start
```
___
### Running the **Web Frontend**:
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
