
import React, { useState } from "react";

import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import mapStyles from './mapStyles'

import "@reach/combobox/styles.css";


const libraries = ["places"];
const mapContainerStyle = {
  height: "700px",
  width: "100%",
  position: "absolute"
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 28.7041,
  lng: 77.1025,
};



export function Home() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });





  const mapRef = React.useRef();

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng }); //retrives the current lat and lng
    mapRef.current.setZoom(8);
  }, []);

  const [selectedMarker, setSelectedMarker] = useState("");

  const markers = [
    {name:"	Electric Vehicle Charger, Prithviraj Market, Rabindra Nagar, New Delhi- 110003	",location:{ lat: 	28.6007255	,lng: 	77.2262524	},},
{name:"	Electric Vehicle Charger, Prithviraj Market, Rabindra Nagar, New Delhi- 110003	",location:{ lat: 	28.6007255	,lng: 	77.2262524	},},
{name:"	Electric Vehicle Charger, Outside RWA Park, Jor Bagh Market, Jor Bagh Colony Road, New Delhi- 110003	",location:{ lat: 	28.5883031	,lng: 	77.2176972	},},
{name:"	Electric Vehicle Charger, Opposite Dory Pharmacy, Khanna Market, Aliganj, Lodhi Colony, New Delhi- 110003	",location:{ lat: 	28.5826538	,lng: 	77.2200872	},},
{name:"	Electric Vehicle Charger, Opposite Goel Opticals, Khanna Market, Aliganj, Lodhi Colony, New Delhi- 110003	",location:{ lat: 	28.584485	,lng: 	77.220316	},},
{name:"	Electric Vehicle Charger, Dharma Marg, Block Y, Diplomatic Enclave, Malcha Market, New Delhi- 110021	",location:{ lat: 	28.6023562	,lng: 	77.1866178	},},
{name:"	Electric Vehicle Charger, Outside Westend Vedi Tailors, Bock M, Middle Circle, Connaught Place, New Delhi- 110001	",location:{ lat: 	28.6336861	,lng: 	77.2181403	},},
{name:"	Electric Vehicle Charger, Near NDMC Office, Fire Brigade Lane, Barakhamba, New Delhi- 110001	",location:{ lat: 	28.6304482	,lng: 	77.2255578	},},
{name:"	Electric Vehicle Charger, Near Bikanervala, Yashwant Place, Chanakyapuri, New Delhi- 110021	",location:{ lat: 	28.5838828	,lng: 	77.163408	},},
{name:"	Electric Vehicle Charger, Khan Market, Rabindra Nagar, New Delhi- 110003	",location:{ lat: 	28.6003333	,lng: 	77.2268889	},},
{name:"	Electric Vehicle Charger, Outside Devinder Collections, Shankar Market, Connaught Place, New Delhi- 110001	",location:{ lat: 	28.633675	,lng: 	77.2234929	},},
{name:"	Electric Vehicle Charger, Opposite HDFC Bank, M- Block, , Connaught Place, New Delhi- 110001	",location:{ lat: 	28.6325843	,lng: 	77.2229787	},},
{name:"	Electric Vehicle Charger, Outside Oriental Bank, Radial Road No. 7, Block M, Connaught Place, New Delhi- 110001	",location:{ lat: 	28.6317294	,lng: 	77.2221076	},},
{name:"	Electric Vehicle Charger, Outside Jain Bhawan, 12 Shaheed Bhagat Singh Marg, Gole Market, New Delhi- 110001	",location:{ lat: 	28.633841	,lng: 	77.2074439	},},
{name:"	Electric Vehicle Charger, NDMC Parking,  Near Ferns n Petals, Near BPCL Petrol Pump,  C Block RR5, Connaught Place,  New Delhi- 110001	",location:{ lat: 	28.6281626	,lng: 	77.2155151	},},
{name:"	Electric Vehicle Charger, NDMC Parking,  Near Croma, D Block RR5,  Opposite BPCL Petrol Pump,  Connaught Place, New Delhi- 110001	",location:{ lat: 	28.6281626	,lng: 	77.2155151	},},
{name:"	Electric Vehicle Charger, Next to PVR Plaza, H Block RR4, Connaught Place, New Delhi- 110001	",location:{ lat: 	28.6350113	,lng: 	77.2196112	},},
{name:"	Electric Vehicle Charger, Opposite South Indian Bank, Block E, RR6, Middle Circle, Connaught Place, New Delhi- 110001	",location:{ lat: 	28.6338828	,lng: 	77.2215424	},},
{name:"	Electric Vehicle Charger, Opposite HP Petrol Pump, Block E, Middle Circle, Connaught Place, New Delhi- 110001	",location:{ lat: 	28.6318964	,lng: 	77.2215824	},},
{name:"	Electric Vehicle Charger, Outside Standard Chartered Bank, Sardar Patel Bhawan, Sansad Marg, New Delhi- 110001	",location:{ lat: 	28.6242518	,lng: 	77.2125818	},},
{name:"	Electric Vehicle Charger, Sarojini Nagar Market, Sarojini Nagar, New Delhi- 110023	",location:{ lat: 	28.5772318	,lng: 	77.1972385	},},
{name:"	Electric Vehicle Charger, Outside Iqbal Bros., G1, Block G, Connaught Place, New Delhi- 110001	",location:{ lat: 	28.6337975	,lng: 	77.2174553	},},
{name:"	Electric Vehicle Charger, Palika Maternity Hospital, Block 11, Lodhi Colony, Near Khanna Market, New Delhi 110003	",location:{ lat: 	28.5838046	,lng: 	77.2218225	},},
{name:"	Electric Vehicle Charger, Outside Chelmsford Club/ Opposite CSIR Building, Rafi Marg, Sansad Marg Area, New Delhi 110001	",location:{ lat: 	28.617783	,lng: 	77.2129959	},},
{name:"	Electric Vehicle Charger, Outside Chelmsford Club/ Opposite CSIR Building, Rafi Marg, Sansad Marg Area, New Delhi 110001	",location:{ lat: 	28.617783	,lng: 	77.2129959	},},
{name:"	Electric Vehicle Charger, FICCI, FICCI Chowk, Mandi House, Todermal Road Area, Mandi House, New Delhi110001	",location:{ lat: 	28.6268691	,lng: 	77.231853	},},
{name:"	Electric Vehicle Charger, Charak Palika Hospital,Â C7 Lane, Moti Bagh 1, Blok F, New Moti Bagh, New Delhi 110021	",location:{ lat: 	28.5852879	,lng: 	77.177094	},},
{name:"	Electric Vehicle Charger, PSOI Club, Chanakyapuri, New Delhi 110021	",location:{ lat: 	28.586617	,lng: 	77.19364	},},
{name:"	Electric Vehicle Charger, PSOI Club, Chanakyapuri, New Delhi 110021	",location:{ lat: 	28.586617	,lng: 	77.19364	},},
{name:"	Electric Vehicle Charger, Near Snow White,Â Block D, Inner Circle, Connaught Place, New Delhi 110001	",location:{ lat: 	28.6336306	,lng: 	77.220579	},},
{name:"	Electric Vehicle Charger, Outside Van Heusen Showroom,Â Block C, Inner Circle, Connaught Place, New Delhi 110001	",location:{ lat: 	28.6329899	,lng: 	77.2179805	},},
{name:"	Electric Vehicle Charger, 16-B, Woodland Showroom,Â Block B, Connaught Place, New Delhi 110001	",location:{ lat: 	28.6340719	,lng: 	77.2187798	},},
{name:"	Electric Vehicle Charger, Nandanam Metro station Chennai  (CMRL)	",location:{ lat: 	12.9959222	,lng: 	80.2102867	},},
{name:"	Electric Vehicle Charger, Nandanam Metro station Chennai  (CMRL)	",location:{ lat: 	12.9959222	,lng: 	80.2102867	},},
{name:"	Electric Vehicle Charger, Nagpur Airport Metro Station, Nagpur	",location:{ lat: 	21.0868801	,lng: 	79.0635586	},},
{name:"	Electric Vehicle Charger, Nagpur Airport Metro Station, Nagpur	",location:{ lat: 	21.0868801	,lng: 	79.0635586	},},
{name:"	Electric Vehicle Charger, Yashwant Place, Chanakyapuri, New Delhi- 110021	",location:{ lat: 	28.5853056	,lng: 	77.191	},},
{name:"	Electric Vehicle Charger, Outside Bharat Sanchar Bhawan, Ashoke Road, Janpath, New Delhi- 110001	",location:{ lat: 	28.6222241	,lng: 	77.2142492	},},
{name:"	Electric Vehicle Charger, Dharma Marg, Block Y, Diplomatic Enclave, Malcha Market, New Delhi- 110021	",location:{ lat: 	28.6023562	,lng: 	77.1866178	},},
{name:"	Electric Vehicle Charger, Charak Palika Hospital,Â C7 Lane, Moti Bagh 1, Blok F, New Moti Bagh, New Delhi 110021	",location:{ lat: 	28.5852879	,lng: 	77.177094	},},
{name:"	Electric Vehicle Charger, Gate No. 1, Lodhi Garden, Lodhi Estate, Lodhi Road, New Delhi 110003	",location:{ lat: 	28.5907109	,lng: 	77.2242844	},},
{name:"	Electric Vehicle Charger, Akashvani Bhawan, Sansad Marg, New Delhi 110001	",location:{ lat: 	28.6245157	,lng: 	77.2135555	},},
{name:"	Electric Vehicle Charger, Opposite IVORY Mart,Â F Block,Â InnerÂ Circle, ConnaughtÂ Place, New Delhi 110001	",location:{ lat: 	28.5503609	,lng: 	77.2139161	},},
{name:"	Electric Vehicle Charger, Near ICICIÂ Bank/Metro Gate No. 7 & 8,Â Block A, Inner Circle, Connaught Place, New Delhi 110001	",location:{ lat: 	28.632723	,lng: 	77.217847	},},
{name:"	Electric Vehicle Charger, Gopal Das Building,Â Barakhamba Road, Connaught Lane, Barakhamba, New Delhi110001	",location:{ lat: 	28.6325843	,lng: 	77.2229787	},},
{name:"	Electric Vehicle Charger, Outside UCO Bank, Block H, RR3, Connaught Place, New Delhi	",location:{ lat: 	28.6351128	,lng: 	77.2184205	},},
{name:"	Electric Vehicle Charger, Press Club of India, 1, Raisina Road, Windsor Place, New Delhi110001	",location:{ lat: 	28.6171933	,lng: 	77.2136452	},},
{name:"	Electric Vehicle Charger, Post Office, Laxmi Bai Nagar, Safderjung Flyover, New Delhi	",location:{ lat: 	28.578452	,lng: 	77.209231	},},
{name:"	Electric Vehicle Charger, Electronic City , Metro Station parking gate no.2, Noida - 201301	",location:{ lat: 	28.627941	,lng: 	77.37493	},},
{name:"	Electric Vehicle Charger, H Block market, Haldiram, Car parking , sector - 63 , Noida - 201301	",location:{ lat: 	28.6265817	,lng: 	77.3752161	},},
{name:"	Electric Vehicle Charger, Side of Hotel Claridges, Tees January Marg, Dr. APJ Abdul Kalam Road, New Delhi- 110003	",location:{ lat: 	28.602443	,lng: 	77.217889	},},
{name:"	Electric Vehicle Charger, Gate No. 1, Lodhi Garden, Lodhi Estate, Lodhi Road, New Delhi 110003	",location:{ lat: 	28.5907109	,lng: 	77.2242844	},},
{name:"	Electric Vehicle Charger, Talkatora Garden,Â President's Estate, New Delhi110004	",location:{ lat: 	28.6248358	,lng: 	77.1952435	},},
{name:"	Electric Vehicle Charger, Talkatora Garden,Â President's Estate, New Delhi110004	",location:{ lat: 	28.6248358	,lng: 	77.1952435	},},
{name:"	Electric Vehicle Charger, Talkatora Stadium,Â President's Estate, New Delhi110004	",location:{ lat: 	28.6252943	,lng: 	77.1952344	},},
{name:"	Electric Vehicle Charger, Indian Coffee House, Connaught Place, New Delhi	",location:{ lat: 	28.6308096	,lng: 	77.2161583	},},
{name:"	Electric Vehicle Charger, Talkatora Garden,Â President's Estate, New Delhi110004	",location:{ lat: 	28.6248358	,lng: 	77.1952435	},},
{name:"	Electric Vehicle Charger, Talkatora Stadium,Â President's Estate, New Delhi110004	",location:{ lat: 	28.6252943	,lng: 	77.1952344	},},
{name:"	Electric Vehicle Charger, High Court Metro Station, Chennai	",location:{ lat: 	13.0318485	,lng: 	80.241973	},},
{name:"	Electric Vehicle Charger, High Court Metro Station, Chennai	",location:{ lat: 	13.0318485	,lng: 	80.241973	},},
{name:"	Electric Vehicle Charger, Koyam Bedu  Metro Station, Chennai	",location:{ lat: 	13.1092809	,lng: 	80.1523462	},},
{name:"	Electric Vehicle Charger, Koyam Bedu  Metro Station, Chennai	",location:{ lat: 	13.1092809	,lng: 	80.1523462	},},
{name:"	Electric Vehicle Charger, Anna Nagar East Metro Station, Chennai (CMRL)	",location:{ lat: 	12.9959222	,lng: 	80.2102867	},},
{name:"	Electric Vehicle Charger, Anna Nagar East Metro Station, Chennai (CMRL)	",location:{ lat: 	12.9959222	,lng: 	80.2102867	},},
{name:"	Electric Vehicle Charger, NMDC Parking, Dilli Haat, West Kidwai Nagar, New Delhi 110023	",location:{ lat: 	28.5772318	,lng: 	77.1972385	},},
{name:"	Electric Vehicle Charger, Hotel Claridges, Tees January Marg, Dr. APJ Abdul Kalam Road, New Delhi- 110003	",location:{ lat: 	28.602443	,lng: 	77.217889	},},
{name:"	Electric Vehicle Charger, Janpath Guest House, Connaught Place, New Delhi	",location:{ lat: 	28.623779	,lng: 	77.218963	},},
{name:"	Electric Vehicle Charger, EESL N-Block GK-1, SDMC parking New Delhi	",location:{ lat: 	28.5568413	,lng: 	77.2340489	},},
{name:"	Electric Vehicle Charger, SDMC Parking, B6, Safderjung Enclave	",location:{ lat: 	28.5503609	,lng: 	77.2139161	},},
{name:"	Electric Vehicle Charger, SDMC Parking, SDA Market, Hauz Khas, New Delhi, Delhi 110016	",location:{ lat: 	28.5463909	,lng: 	77.1963545	},},
{name:"	Electric Vehicle Charger, SDMC Parking, Aurbindo Market Place,Hauz Khas, New Delhi, Delhi 110016	",location:{ lat: 	28.5453944	,lng: 	77.1908225	},},
{name:"	Electric Vehicle Charger, SDMC Parking, R Block, GK-1, DELHI-110016	",location:{ lat: 	28.5500136	,lng: 	77.2448704	},},
{name:"	Electric Vehicle Charger, Near Tank No 3, Opp Goutams, Street Number 24,Sub Central Business District Action Area 1, Action Area I, Newtown West Bengal 700156	",location:{ lat: 	22.579939	,lng: 	88.4531807	},},
{name:"	Electric Vehicle Charger, Near Tank No 3, Opp Goutams, Street Number 24,Sub Central Business District Action Area 1, Action Area I, Newtown West Bengal 700156	",location:{ lat: 	22.579939	,lng: 	88.4531807	},},
{name:"	Electric Vehicle Charger, NKDA New Town Business Club Parking Lot, AE Block(Newtown), Newtown, West Bengal 700059	",location:{ lat: 	22.585303	,lng: 	88.4569056	},},
{name:"	Electric Vehicle Charger, NKDA New Town Business Club Parking Lot, AE Block(Newtown), Newtown, West Bengal 700059	",location:{ lat: 	22.585303	,lng: 	88.4569056	},},
{name:"	Electric Vehicle Charger, Parking Lot, 7 Wonders, Gate No 4, Eco Park Entry Plaza, AA IIB, Newtown, Kolkata, West Bengal 700135	",location:{ lat: 	22.603134	,lng: 	88.4671428	},},
{name:"	Electric Vehicle Charger, Parking Lot, 7 Wonders, Gate No 4, Eco Park Entry Plaza, AA IIB, Newtown, Kolkata, West Bengal 700135	",location:{ lat: 	22.603134	,lng: 	88.4671428	},},
{name:"	Electric Vehicle Charger, Parking Lot Golf Club, Gate no. 6, Ecopark, Deshbandhu Nagar, Rekjuani, West Bengal 700156	",location:{ lat: 	22.5833562	,lng: 	88.4593418	},},
{name:"	Electric Vehicle Charger, Parking Lot Golf Club, Gate no. 6, Ecopark, Deshbandhu Nagar, Rekjuani, West Bengal 700156	",location:{ lat: 	22.5833562	,lng: 	88.4593418	},},
{name:"	Electric Vehicle Charger, NKDA Parking Lot, Beside Tata Memorial Cancer Hospital , 14, MAR(E-W), DH Block(Newtown), Action Area I, Newtown, Kolkata, West Bengal 700160	",location:{ lat: 	22.5770971	,lng: 	88.4796319	},},
{name:"	Electric Vehicle Charger, NKDA Parking Lot, Beside Tata Memorial Cancer Hospital , 14, MAR(E-W), DH Block(Newtown), Action Area I, Newtown, Kolkata, West Bengal 700160	",location:{ lat: 	22.5770971	,lng: 	88.4796319	},},
{name:"	Electric Vehicle Charger, NKDA Parking Lot, Beside Axis Mall, CF Block Newtown, Action Area 1C, Newtown, Kolkata, West Bengal 700156	",location:{ lat: 	22.5796534	,lng: 	88.459843	},},
{name:"	Electric Vehicle Charger, NKDA Parking Lot, Beside Axis Mall, CF Block Newtown, Action Area 1C, Newtown, Kolkata, West Bengal 700156	",location:{ lat: 	22.5796534	,lng: 	88.459843	},},
{name:"	Electric Vehicle Charger, Ganga Shopping Complex, Sector 29, Noida, Uttar Pradesh 201301	",location:{ lat: 	28.5721498	,lng: 	77.3375462	},},
{name:"	Electric Vehicle Charger, Near RTO OfficeSector 33A, Noida, Ghaziabad, Uttar Pradesh, 201301, India	",location:{ lat: 	28.5821195	,lng: 	77.3266991	},},
{name:"	Electric Vehicle Charger, Sector 15, Nithari, Noida, Dadri, Gautam Buddha Nagar, Uttar Pradesh, 201301, India	",location:{ lat: 	28.6265817	,lng: 	77.3752161	},},
{name:"	Electric Vehicle Charger, road between sector 124 & 125 and beside SPCl Sector Road, Noida, Uttar Pradesh, 201313	",location:{ lat: 	28.5481935	,lng: 	77.3221938	},},
{name:"	Electric Vehicle Charger, Between kirti mann plaza and NMC hospital Sector 30 Noida	",location:{ lat: 	28.5727977	,lng: 	77.340531	},},
{name:"	Electric Vehicle Charger,  Sector 142, Noida, Uttar Pradesh, 201305	",location:{ lat: 	28.6265817	,lng: 	77.3752161	},},
{name:"	Electric Vehicle Charger, Outside Chelmsford Club/ Opposite CSIR Building, Rafi Marg, Sansad Marg Area, New Delhi 110001	",location:{ lat: 	28.617783	,lng: 	77.2129959	},},
{name:"	Electric Vehicle Charger, Outside Chelmsford Club/ Opposite CSIR Building, Rafi Marg, Sansad Marg Area, New Delhi 110001	",location:{ lat: 	28.617783	,lng: 	77.2129959	},},
{name:"	Electric Vehicle Charger, Gate No. 1, Lodhi Garden, Lodhi Estate, Lodhi Road, New Delhi 110003	",location:{ lat: 	28.5907109	,lng: 	77.2242844	},},
{name:"	Electric Vehicle Charger, Gate No. 1, Lodhi Garden, Lodhi Estate, Lodhi Road, New Delhi 110003	",location:{ lat: 	28.5907109	,lng: 	77.2242844	},},
{name:"	Electric Vehicle Charger, Outside Chelmsford Club/ Opposite CSIR Building, Rafi Marg, Sansad Marg Area, New Delhi 110001	",location:{ lat: 	28.617783	,lng: 	77.2129959	},},
{name:"	Electric Vehicle Charger, Outside Chelmsford Club/ Opposite CSIR Building, Rafi Marg, Sansad Marg Area, New Delhi 110001	",location:{ lat: 	28.617783	,lng: 	77.2129959	},},
{name:"	Electric Vehicle Charger, NMDC Parking, Dilli Haat, West Kidwai Nagar, New Delhi 110023	",location:{ lat: 	28.5772318	,lng: 	77.1972385	},},
{name:"	Electric Vehicle Charger, Op. C&R Textiles Ltd, sector-60, Noida	",location:{ lat: 	28.6021486	,lng: 	77.3627249	},},
{name:"	Electric Vehicle Charger, Near Tata Advance Systems, sector- 59, Noida	",location:{ lat: 	28.6075627	,lng: 	77.3683319	},},
{name:"	Electric Vehicle Charger, In front of Marie gold exports ltd, A block, sector-64, Noida	",location:{ lat: 	28.611892	,lng: 	77.3762261	},},
{name:"	Electric Vehicle Charger, In front of Hexagon pvt ltd, sector-65, Noida	",location:{ lat: 	28.6127633	,lng: 	77.3871319	},},
{name:"	Electric Vehicle Charger, Charger 4,c/o SDMC, GK-1 N Block market, New Delhi,, Delhi - 110048	",location:{ lat: 	28.5730519	,lng: 	77.1735339	},},
{name:"	Electric Vehicle Charger, Charger 5, c/o SDMC, GK-1 N Block market, New Delhi,, Delhi - 110048	",location:{ lat: 	28.5730519	,lng: 	77.1735339	},},
{name:"	Electric Vehicle Charger, EESL PVR Priya Vasant Vihar, SDMC parking New Delhi, Near Gold's Gym	",location:{ lat: 	28.5576621	,lng: 	77.1576843	},},
{name:"	Electric Vehicle Charger, EESL PVR Priya Vasant Vihar, SDMC parking New Delhi, Near Plot 7	",location:{ lat: 	28.5576621	,lng: 	77.1576843	},},
{name:"	Electric Vehicle Charger, EV Parking Slot 3-5, SDMC Parking, Hauz Khas Village, Hauz Khas, 110016	",location:{ lat: 	28.5533997	,lng: 	77.1941654	},},
{name:"	Electric Vehicle Charger, EV Parking Slot 5, SDMC Parking, Hauz Khas Village, Hauz Khas, 110016	",location:{ lat: 	28.5533997	,lng: 	77.1941654	},},
{name:"	Electric Vehicle Charger, J-Block, Malviya Nagar, parking New Delhi	",location:{ lat: 	28.5836863	,lng: 	77.0801998	},},
{name:"	Electric Vehicle Charger, J-Block, Malviya Nagar, parking New Delhi	",location:{ lat: 	28.5836863	,lng: 	77.0801998	},},
{name:"	Electric Vehicle Charger, Veer Savarkar Marg, Lajpat Nagar, SDMC parking New Delhi	",location:{ lat: 	28.571886	,lng: 	77.242384	},},
{name:"	Electric Vehicle Charger, Feroze Gandhi Road, Lajpat Nagar, SDMC parking New Delhi	",location:{ lat: 	28.6428915	,lng: 	77.2190894	},},
{name:"	Electric Vehicle Charger, Meharchand Market, SDMC parking, New Delhi	",location:{ lat: 	28.5860181	,lng: 	77.2279415	},},
{name:"	Electric Vehicle Charger, EESL H-Block, Sarita Vihar, SDMC parking New Delhi	",location:{ lat: 	28.534966	,lng: 	77.291393	},},
{name:"	Electric Vehicle Charger, EESL, Plot 81-85, Nehru Place, SDMC Parking, New Delhi	",location:{ lat: 	28.5488714	,lng: 	77.2541062	},},
{name:"	Electric Vehicle Charger, NRANVP, PARYAVAS BHAWAN, NORTH BLOCK, SECTOR 19, NAYA RAYPUR MARG, ATAL NAGAR RAIPUR	",location:{ lat: 	21.1642265	,lng: 	81.7886588	},},
{name:"	Electric Vehicle Charger, CBDNAVA RAIPUR MARG, SECTOR 21,KAYABANDHA, ATAL NAGAR RAIPUR DIST. 492101 Chhatisgarh	",location:{ lat: 	21.1700582	,lng: 	81.7714469	},},
{name:"	Electric Vehicle Charger, Diagonally op. Sasta Sundar Hospital, sector- 58, Noida	",location:{ lat: 	28.6067511	,lng: 	77.3597194	},},
{name:"	Electric Vehicle Charger, In front of affinity salon, sector- 51, Noida	",location:{ lat: 	28.5773143	,lng: 	77.3609538	},},
{name:"	Electric Vehicle Charger, Side parking of HCL building, sector-8, Noida	",location:{ lat: 	28.5951643	,lng: 	77.328135	},},
{name:"	Electric Vehicle Charger, Opp C-101 Jain air travels, sector-2, Noida	",location:{ lat: 	28.5846875	,lng: 	77.3159296	},},
{name:"	Electric Vehicle Charger, H Block market, Haldiram, Car parking , sector - 63 , Noida - 201301	",location:{ lat: 	28.6265817	,lng: 	77.3752161	},},
{name:"	Electric Vehicle Charger, H Block market, Haldiram, Car parking , sector - 63 , Noida - 201301	",location:{ lat: 	28.6265817	,lng: 	77.3752161	},},
{name:"	Electric Vehicle Charger, Electronic City , Metro Station parking gate no.2, Noida - 201301	",location:{ lat: 	28.627941	,lng: 	77.37493	},},
{name:"	Electric Vehicle Charger, Electronic City , Metro Station parking gate no.2, Noida - 201301	",location:{ lat: 	28.627941	,lng: 	77.37493	},},
{name:"	Electric Vehicle Charger, Between kirti mann plaza and NMC hospital Sector 30 Noida	",location:{ lat: 	28.5727977	,lng: 	77.340531	},},
{name:"	Electric Vehicle Charger, Between kirti mann plaza and NMC hospital Sector 30 Noida	",location:{ lat: 	28.5727977	,lng: 	77.340531	},},
{name:"	Electric Vehicle Charger, Near RTO OfficeSector 33A, Noida, Ghaziabad, Uttar Pradesh, 201301, India	",location:{ lat: 	28.5821195	,lng: 	77.3266991	},},
{name:"	Electric Vehicle Charger, Near RTO OfficeSector 33A, Noida, Ghaziabad, Uttar Pradesh, 201301, India	",location:{ lat: 	28.5821195	,lng: 	77.3266991	},},
{name:"	Electric Vehicle Charger, road between sector 124 & 125 and beside SPCl Sector Road, Noida, Uttar Pradesh, 201313	",location:{ lat: 	28.5481935	,lng: 	77.3221938	},},
{name:"	Electric Vehicle Charger, road between sector 124 & 125 and beside SPCl Sector Road, Noida, Uttar Pradesh, 201313	",location:{ lat: 	28.5481935	,lng: 	77.3221938	},},
{name:"	Electric Vehicle Charger,  Sector 142, Near Advan Chowk  Noida, Uttar Pradesh, 201305	",location:{ lat: 	28.4999533	,lng: 	77.4142541	},},
{name:"	Electric Vehicle Charger,  Sector 142, Near Advan Chowk  Noida, Uttar Pradesh, 201305	",location:{ lat: 	28.4999533	,lng: 	77.4142541	},},
{name:"	Electric Vehicle Charger,  Sector 61 Opposite Shopprix Mall , Noida, Uttar Pradesh, 201305	",location:{ lat: 	28.5971	,lng: 	77.3649	},},
{name:"	Electric Vehicle Charger,  Sector 61 Opposite Shopprix Mall , Noida, Uttar Pradesh, 201305	",location:{ lat: 	28.5971	,lng: 	77.3649	},},
{name:"	Electric Vehicle Charger,  Sector 50  Central Market, Noida, Uttar Pradesh, 201305	",location:{ lat: 	28.5719972	,lng: 	77.3693678	},},
{name:"	Electric Vehicle Charger,  Sector 50 , Central Market,  Noida, Uttar Pradesh, 201305	",location:{ lat: 	28.5290983	,lng: 	77.4033806	},},
{name:"	Electric Vehicle Charger, Ganga Shopping Complex, Sector 29, Noida, Uttar Pradesh 201301	",location:{ lat: 	28.5721498	,lng: 	77.3375462	},},
{name:"	Electric Vehicle Charger, Ganga Shopping Complex, Sector 29, Noida, Uttar Pradesh 201301	",location:{ lat: 	28.5721498	,lng: 	77.3375462	},},
{name:"	Electric Vehicle Charger, Between kirti mann plaza and NMC hospital Sector 30 Noida	",location:{ lat: 	28.5727977	,lng: 	77.340531	},},
{name:"	Electric Vehicle Charger, Between kirti mann plaza and NMC hospital Sector 30 Noida	",location:{ lat: 	28.5727977	,lng: 	77.340531	},},
{name:"	Electric Vehicle Charger,  Sector 50  Central Market, Noida, Uttar Pradesh, 201305	",location:{ lat: 	28.5719972	,lng: 	77.3693678	},},
{name:"	Electric Vehicle Charger,  Sector 50  Central Market, Noida, Uttar Pradesh, 201305	",location:{ lat: 	28.5719972	,lng: 	77.3693678	},},
{name:"	Electric Vehicle Charger, Sector 15, Nithari, Noida, Dadri, Gautam Buddha Nagar, Uttar Pradesh, 201301, India	",location:{ lat: 	28.6265817	,lng: 	77.3752161	},},
{name:"	Electric Vehicle Charger, c/o SDMCHauz Khas VillageNew Delhi,Delhi - 110016	",location:{ lat: 	28.5471702	,lng: 	77.2002745	},},
{name:"	Electric Vehicle Charger, NMDC Parking, Dilli Haat, West Kidwai Nagar, New Delhi 110023	",location:{ lat: 	28.5772318	,lng: 	77.1972385	},},
{name:"	Electric Vehicle Charger, Hotel Claridges, Tees January Marg, Dr. APJ Abdul Kalam Road, New Delhi- 110003	",location:{ lat: 	28.602443	,lng: 	77.217889	},},
{name:"	Electric Vehicle Charger,  Sector 61 Opposite Shopprix Mall , Noida, Uttar Pradesh, 201305	",location:{ lat: 	28.5971	,lng: 	77.3649	},},
{name:"	Electric Vehicle Charger,  Sector 50 , Central Market,  Noida, Uttar Pradesh, 201305	",location:{ lat: 	28.5290983	,lng: 	77.4033806	},},
{name:"	Electric Vehicle Charger,  Chennai Egmore metro, Chennai (CMRL)	",location:{ lat: 	13.0730518	,lng: 	80.1938063	},},
{name:"	Electric Vehicle Charger, Chennai Metro Alandur station Car parking area, Alandur, Chennai 600016	",location:{ lat: 	13.0042155	,lng: 	80.2015482	},},
{name:"	Electric Vehicle Charger, Charger 6, c/o SDMC, GK-1 N Block market, New Delhi,, Delhi - 110048	",location:{ lat: 	28.5730519	,lng: 	77.1735339	},},
{name:"	Electric Vehicle Charger, EV Parking Slot 3-5, SDMC Parking, N Block Market, Greater Kailash - 1 , 110048	",location:{ lat: 	28.55664	,lng: 	77.2321386	},},
{name:"	Electric Vehicle Charger, EV Parking Slot 5, SDMC Parking, N Block Market, Greater Kailash - 1 , 110048	",location:{ lat: 	28.55664	,lng: 	77.2321386	},},
{name:"	Electric Vehicle Charger, EV Parking Slot 2, SDMC Parking, Hauz Khas Village, Hauz Khas - 1 , 110016	",location:{ lat: 	28.5730519	,lng: 	77.1735339	},},
{name:"	Electric Vehicle Charger, Charger 2, SDMC Parking, Hauz Khas Village, New Delhi	",location:{ lat: 	28.553693	,lng: 	77.19925	},},
{name:"	Electric Vehicle Charger, Back of Hotel Claridges Near NDMC Power Sub Station, Tees January Marg, Dr. APJ Abdul Kalam Road, New Delhi- 110003	",location:{ lat: 	28.602443	,lng: 	77.217889	},},
{name:"	Electric Vehicle Charger, Charger 1, Sector 2: State Bank of lndia, Noida - UP	",location:{ lat: 	28.5875036	,lng: 	77.31269	},},
{name:"	Electric Vehicle Charger, Charger 2, Sector 2: State Bank of lndia, Noida - UP	",location:{ lat: 	28.5355161	,lng: 	77.3910265	},},
{name:"	Electric Vehicle Charger, Charger 1, Sector 3: G-1 to G-50, Noida - UP	",location:{ lat: 	28.5355161	,lng: 	77.3910265	},},
{name:"	Electric Vehicle Charger, Charger 2, Sector 3: G-1 to G-50, Noida - UP	",location:{ lat: 	28.5355161	,lng: 	77.3910265	},},
{name:"	Electric Vehicle Charger, Charger 1, Sector 3: F-7 to F-8, Noida UP	",location:{ lat: 	28.5355161	,lng: 	77.3910265	},},
{name:"	Electric Vehicle Charger, Charger 2, Sector 3: F-7 to F-8, Noida UP	",location:{ lat: 	28.5355161	,lng: 	77.3910265	},},
{name:"	Electric Vehicle Charger, Charger 1, Sector 6: Reception Noida Authority, Noida, UP	",location:{ lat: 	28.5925506	,lng: 	77.3183746	},},
{name:"	Electric Vehicle Charger, Charger 2, Sector 6: Reception Noida Authority, Noida, UP	",location:{ lat: 	28.5925506	,lng: 	77.3183746	},},
{name:"	Electric Vehicle Charger, Sector 25A, Spice Mall plot area, Noida Authority, Noida, UP	",location:{ lat: 	28.5862141	,lng: 	77.3411026	},},
{name:"	Electric Vehicle Charger, Charger 2, Sec-25A: Spice Mall plot area	",location:{ lat: 	28.5862141	,lng: 	77.3411026	},},
{name:"	Electric Vehicle Charger, Charger 1, Sector 16: Parking near metro station, sector-16, Noida, UP	",location:{ lat: 	28.5773799	,lng: 	77.3144936	},},
{name:"	Electric Vehicle Charger, Charger 2, Sector 16: Parking near metro station, sector-16, Noida, UP	",location:{ lat: 	28.5773799	,lng: 	77.3144936	},},
{name:"	Electric Vehicle Charger, DTPC office, thiruvananthapuram,Kerala- 605007	",location:{ lat: 	8.5083388	,lng: 	76.9472347	},},
{name:"	Electric Vehicle Charger, KTDC Tourist Reception Centre Shanmugham road, Ernakulam, Marine drive, Kochi Kerala-682031	",location:{ lat: 	9.9769209	,lng: 	76.2777812	},},
{name:"	Electric Vehicle Charger, State Council For Child Welfare, CV Raman Pillai Rd, Near Kerala, Housing Board, Thycaud, Thiruvananthapuram, Kerala 695014	",location:{ lat: 	8.491622	,lng: 	76.9562469	},},
{name:"	Electric Vehicle Charger, Tirumangalam Metro station, Chennai	",location:{ lat: 	12.9918445	,lng: 	80.1418013	},},
{name:"	Electric Vehicle Charger, Tirumangalam Metro station, Chennai	",location:{ lat: 	12.9918445	,lng: 	80.1418013	},},
{name:"	Electric Vehicle Charger, KTDC Tourist Reception Centre Shanmugham road, Ernakulam, Marine drive, Kochi Kerala-682031	",location:{ lat: 	9.9769209	,lng: 	76.2777812	},},
{name:"	Electric Vehicle Charger, Akashvani Bhawan, Sansad Marg, New Delhi 110001	",location:{ lat: 	28.6245157	,lng: 	77.2135555	},},
{name:"	Electric Vehicle Charger, Akashvani Bhawan, Sansad Marg, New Delhi 110001	",location:{ lat: 	28.6245157	,lng: 	77.2135555	},},
{name:"	Electric Vehicle Charger, FICCI, FICCI Chowk, Mandi House, New Delhi	",location:{ lat: 	28.6268691	,lng: 	77.231853	},},
{name:"	Electric Vehicle Charger, Near NDMC Office, Fire Brigade Lane, Barakhamba, New Delhi- 110001	",location:{ lat: 	28.6304482	,lng: 	77.2255578	},},
{name:"	Electric Vehicle Charger, Near NDMC Office, Fire Brigade Lane, Barakhamba, New Delhi- 110001	",location:{ lat: 	28.6304482	,lng: 	77.2255578	},},
{name:"	Electric Vehicle Charger, Talkatora Stadium, President's Estate, New Delhi110004	",location:{ lat: 	28.6252943	,lng: 	77.1952344	},},
{name:"	Electric Vehicle Charger, Talkatora Garden, President's Estate, New Delhi110004	",location:{ lat: 	28.6248358	,lng: 	77.1952435	},},
{name:"	Electric Vehicle Charger, c/o SDMCHauz Khas VillageNew Delhi,Delhi - 110016	",location:{ lat: 	28.5471702	,lng: 	77.2002745	},},
{name:"	Electric Vehicle Charger, PVR Priya Vasant  Vihar	",location:{ lat: 	28.4974825	,lng: 	77.0829777	},},
{name:"	Electric Vehicle Charger, Meharchand Market, New Delhi	",location:{ lat: 	28.5881111	,lng: 	77.2175556	},},
{name:"	Electric Vehicle Charger, Meharchand Market, New Delhi	",location:{ lat: 	28.5881111	,lng: 	77.2175556	},},
{name:"	Electric Vehicle Charger, RK Puram Sector 12 Market	",location:{ lat: 	28.5743032	,lng: 	77.1765548	},},
{name:"	Electric Vehicle Charger, RK Puram Sector 12 Market	",location:{ lat: 	28.5743032	,lng: 	77.1765548	},},
{name:"	Electric Vehicle Charger, Saidapet Metro station	",location:{ lat: 	13.0237197	,lng: 	80.2282092	},},
{name:"	Electric Vehicle Charger, Saidapet Metro station	",location:{ lat: 	13.0237197	,lng: 	80.2282092	},},
{name:"	Electric Vehicle Charger, Tirumangalam Metro station, Chennai	",location:{ lat: 	12.9918445	,lng: 	80.1418013	},},
{name:"	Electric Vehicle Charger, Saidapet Metro station	",location:{ lat: 	13.0237197	,lng: 	80.2282092	},},
{name:"	Electric Vehicle Charger, DLF Building, Sansad Marg, Janpath, Connaught Place, New Delhi 110001.	",location:{ lat: 	28.6212385	,lng: 	77.2183048	},},
{name:"	Electric Vehicle Charger, Talkatora Stadium,Â President's Estate, New Delhi110004	",location:{ lat: 	28.6252943	,lng: 	77.1952344	},},
{name:"	Electric Vehicle Charger, ECO Park,Gate No1,West Bengal:700156	",location:{ lat: 	22.5833562	,lng: 	88.4593418	},},
{name:"	Electric Vehicle Charger, Shapoorji complex,New Town,kolkata,West Bengal:700135	",location:{ lat: 	22.5691795	,lng: 	88.5090643	},},
{name:"	Electric Vehicle Charger, ECO Park,Gate No1,West Bengal:700156	",location:{ lat: 	22.5833562	,lng: 	88.4593418	},},
{name:"	Electric Vehicle Charger, Shapoorji complex,New Town,kolkata,West Bengal:700135	",location:{ lat: 	22.5691795	,lng: 	88.5090643	},},
{name:"	Electric Vehicle Charger, State Council For Child Welfare, CV Raman Pillai Rd, Near Kerala, Housing Board, Thycaud, Thiruvananthapuram, Kerala 695014	",location:{ lat: 	8.491622	,lng: 	76.9562469	},},
{name:"	Electric Vehicle Charger, Shanghumukham beach, thiruvananthapuram,Kerala- 605007	",location:{ lat: 	8.4810515	,lng: 	76.9126218	},},
{name:"	Electric Vehicle Charger, KTDC Tourist Reception Centre Shanmugham road, Ernakulam, Marine drive, Kochi Kerala-682031	",location:{ lat: 	9.9769209	,lng: 	76.2777812	},},
{name:"	Electric Vehicle Charger, State Council For Child Welfare, CV Raman Pillai Rd, Near Kerala, Housing Board, Thycaud, Thiruvananthapuram, Kerala 695014	",location:{ lat: 	8.491622	,lng: 	76.9562469	},},
{name:"	Electric Vehicle Charger, EESL PVR Priya Vasant Vihar, SDMC parking New Delhi, Near Plot 7	",location:{ lat: 	28.5576621	,lng: 	77.1576843	},},

  ];


 

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <>

      <Search className="form-control me-2" panTo={panTo} />

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        
        onLoad={onMapLoad}
      >
        {markers.map((marker) =>{
          return(
            <div key={marker.name}>
              <Marker position={marker.location} onClick={() => {
                    setSelectedMarker(marker);
                  }}></Marker>

            </div>
          )
        })}
        {selectedMarker && (
            <InfoWindow
              position={selectedMarker.location}
              options={{
                pixelOffset: new window.google.maps.Size(0, -40),
              }}
            >
              <div>
                <a>location - {selectedMarker.name}</a>
                <br></br><br></br>
                <a href="http://localhost:3001/"/><button className="btn btn-primary"  type="submit">Book Slot</button>
                &nbsp;
                <button className="btn btn-primary" type="submit">Direction</button>
                &nbsp;
                <button className="btn btn-primary" onClick={() => setSelectedMarker("")}>Close</button>
              </div>
            </InfoWindow>
            
          )}
      </GoogleMap>
    </>

  )
}





function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 12.9719, lng: () => 77.5937 },
      radius: 100 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default Home;