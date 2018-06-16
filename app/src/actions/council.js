export const GET_HR_CHAIRS = 'GET_HR_CHAIRS';
export const GET_HR_MEMBERS = 'GET_HR_MEMBERS';
export const GET_SEC_CHAIRS = 'GET_SEC_CHAIRS';
export const GET_SEC_MEMBERS = 'GET_SEC_MEMBERS';
export const GET_ECOSOC_CHAIRS = 'GET_ECOSOC_CHAIRS';
export const GET_ECOSOC_MEMBERS = 'GET_ECOSOC_MEMBERS';
export const GET_POL_CHAIRS = 'GET_POL_CHAIRS';
export const GET_POL_MEMBERS = 'GET_POL_MEMBERS';

const HR_CHAIRS = [
  {name: 'Lim Beng Lei', info: 'greece'},
  {name: 'Alai Syafina binti Muhammad Haafizh Shah @ Penny Pong', info: 'secretary general'}
];

const HR_MEMBERS = [
  {name: 'Damien Beckham Chung Wen Jei', info: 'RUSSIA'},
  {name: 'Adelene Yong Bao Li', info: 'LUXEMBOURG'},
  {name: 'Dk Siti Nur Hazimah Binti Pg Hj Tengah', info: 'TANZANIA'},
  {name: 'Nyi Raden Calvinca Naomi Poerawinata', info: 'LEBANON'},
  {name: 'Nurul Huda @ Zulfa Bte Abang Mohammad', info: 'SOUTH SUDAN'},
  {name: 'Rachelle Chin Shi Ying', info: 'OMAN'},
  {name: 'Ak Mohammad Khairuddin Anwar @ Ak Hamdani bin Pg Ahmad', info: 'INDIA'},
  {name: 'Wansobri Hajihama', info: 'UNITED KINGDOM'},
  {name: 'Mohammad Syahmi Nazmi bin Mohammad Salleh', info: 'CYPRUS'},
  {name: 'Lee Yan Chin', info: 'TUNISIA'},
  {name: 'Josephine Wong', info: 'USA'},
  {name: 'Nurul Amal Wardina Hasnina Farhana Athilah Muntassir', info: 'MEXICO'},
  {name: 'Nurul Haziqah Binti Jefri', info: 'GERMANY'},
  {name: 'Mohammad Farhan Haq’em Mohammad Edy Sumardi', info: 'SYRIA'},
  {name: 'Amanda Liaw Min Ru', info: 'FRANCE'},
  {name: 'Nur Izzati Fadhilah Bte Hj Rozman', info: 'SRI LANKA'},
  {name: 'Farah Sabrina Binti Dr. Mohammad Saiful', info: 'NIGERIA'},
  {name: 'Nurul Asyiqin Bte Mohd Azleen', info: 'ZIMBABWE'}
];

const SEC_CHAIRS = [
  {name: 'Gan Ken Ji', info: 'LAOS'},
  {name: 'Nur Hamiz’zah Binti Razali', info: 'secretary general'}
];

const SEC_MEMBERS = [
  {name: 'Wong Sii Yuan', info: 'TURKEY'},
  {name: 'Josclyn Wong', info: 'GHANA'},
  {name: 'Chong Jing Wen', info: 'FINLAND'},
  {name: 'Miza Razanah binti Mohaimim', info: 'AUSTRALIA'},
  {name: 'Samuel Paul Christopher', info: 'USA'},
  {name: 'Tan Kia Keng Jason', info: 'RUSSIA'},
  {name: 'Dk Noor Amal Shahirah Hazerah Bte Pg Noor A’malludin Shah ', info: 'CHAD'},
  {name: 'Lim Shin Hui', info: 'GERMANY'},
  {name: 'Muhammad Wafiuddin Bin Aminuddin', info: 'EGYPT'},
  {name: 'Kon Thian Enn', info: 'IRAN'},
  {name: 'Nurul Amal Asfarina Hassanah Saffiyah Athirah Muntassir', info: 'THAILAND'},
  {name: 'Farah Nurhaliza', info: 'CZECH REPUBLIC'},
  {name: 'Vibhusha Selvam Vinothini', info: 'NORTH KOREA'},
  {name: 'Hana Farhana Binti Haji Azman', info: 'UKRAINE'},
  {name: 'Yashpreet Singh', info: 'CHINA'},
  {name: 'Sumaiya Binti Haji Hussin', info: 'SOMALIA'},
  {name: 'Stella Teoh Sze Pei', info: 'PHILLIPINES'}
];

const ECOSOC_CHAIRS = [
  {name: 'Ang Limin Sabrina', info: 'DENMARK'},
  {name: 'Kon Chui Yuh', info: 'NETHERLANDS'}
];

const ECOSOC_MEMBERS = [
  {name: 'Nur Amirah Batrisyia binti Haji Mohammad Noorefendy', info: 'BRUNEI'},
  {name: 'Shim Sing Yeh', info: 'BANGLADESH'},
  {name: 'Yii Mun Yeok', info: 'MALDIVES'},
  {name: 'Ak Ihsan Redhauddin Bin Pg Hj Aliuddin', info: 'AFGHANISTAN'},
  {name: 'Mir Sajjad Ahamed', info: 'DEMOCRATICREPUBLIC OF CONGO'},
  {name: 'Muhammad Alif Afiq Bin Haji Hasmine Wandi', info: 'JAPAN'},
  {name: 'Nur fathini Syafiqah binti Zainurijal', info: 'YEMEN'},
  {name: 'Hairani Bte Husaini', info: 'DENMARK'},
  {name: 'Ak Muhammad Aqil Hannan Bin Pg Kamarudin', info: 'HAITI'},
  {name: 'Lim Jia Hao', info: 'INDIA'},
  {name: 'Mardhiah Mohamad Rodee', info: 'MYANMAR'},
  {name: 'Awang Mohamad Danial Ziyad Awang Haji Mohamad Yunus', info: 'SAUDI ARABIA'},
  {name: 'Hannah Chin', info: 'SOUTH SUDAN'},
  {name: 'Riaz Jeffry Noorul Haq', info: 'BURUNDI'},
  {name: 'Muhd Nazif bin Muhd ‘Azmin', info: 'ISRAEL'},
  {name: 'Nurul Dayana Batrisya Bte Haji Mohneh', info: 'EAST TIMOR'},
  {name: 'Pg Nur ‘Azeezah binti Pg Anak Hj Mohd Al-Mokhtar', info: 'QATAR'},
  {name: 'Chan Pei Xin', info: 'AUSTRIA'}
];

const POL_CHAIRS = [
  {name: 'Ngu Kah Shin', info: 'MOROCCO'},
  {name: 'Ayqa Dasal Portillo', info: 'SINGAPORE'}
];

const POL_MEMBERS = [
  {name: 'Noratikah Binti Abdul Rahman', info: 'BELGIUM'},
  {name: 'Siti Hazirah Syazwana Salleh', info: 'ETHIOPIA'},
  {name: 'Kelvin Kong Kani Wen', info: 'PAKISTAN'},
  {name: 'Loh Eng Hou', info: 'CANADA'},
  {name: 'Nur Bazilah Binti Haji Mamit', info: 'ALBANIA'},
  {name: 'Ak Norazim Bin Pg Norazim', info: 'SOUTH AFRICA'},
  {name: 'Nurul Sabrina Bte Mulyadi', info: 'HONG KONG'},
  {name: 'Jeff George', info: 'ITALY'},
  {name: 'Fiffy Ezlyn Norfaiz’zzahtol@Bibi Ezlyn Bte Muhammad Suradzin', info: 'RWANDA'},
  {name: 'Muhammad Nazif Bin Dolrani', info: 'GREECE'},
  {name: 'Pravenash Sathiyamoorthie', info: 'NEW ZEALAND'},
  {name: 'Nur Alainah Bte Muhd Reeda', info: 'VENEZUELA'},
  {name: 'Nur Munawwarah Hj Ismail', info: 'MALAYSIA'},
  {name: 'Dinie Musfirah Binti Musli', info: 'IRAQ'},
  {name: 'Ankita Kurup', info: 'CHINA'},
  {name: 'Azmina', info: 'SPAIN'},
  {name: 'Malaikah Warraich', info: 'INDONESIA'},
  {name: 'Shuko Lee Hui Yi', info: 'UNITED KINGDOM'},
  {name: 'Ak Muhammad Azizul Hakiem Bin Pg Abdul Rahim', info: 'SIERRA LEONNE'}
];


export const getHRChairs = () => (dispatch, getState) => {
  dispatch({
    type: GET_HR_CHAIRS,
    data: HR_CHAIRS
  })
};

export const getHRMembers = () => (dispatch, getState) => {
  dispatch({
    type: GET_HR_MEMBERS,
    data: HR_MEMBERS
  })
};

export const getSECChairs = () => (dispatch, getState) => {
  dispatch({
    type: GET_SEC_CHAIRS,
    data: SEC_CHAIRS
  })
};

export const getSECMembers = () => (dispatch, getState) => {
  dispatch({
    type: GET_SEC_MEMBERS,
    data: SEC_MEMBERS
  })
};

export const getECOSOCChairs = () => (dispatch, getState) => {
  dispatch({
    type: GET_ECOSOC_CHAIRS,
    data: ECOSOC_CHAIRS
  })
};

export const getECOSOCMembers = () => (dispatch, getState) => {
  dispatch({
    type: GET_ECOSOC_MEMBERS,
    data: ECOSOC_MEMBERS
  })
};

export const getPOLChairs = () => (dispatch, getState) => {
  dispatch({
    type: GET_POL_CHAIRS,
    data: POL_CHAIRS
  })
};

export const getPOLMembers = () => (dispatch, getState) => {
  dispatch({
    type: GET_POL_MEMBERS,
    data: POL_MEMBERS
  })
};
