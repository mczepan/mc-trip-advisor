import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import request from 'common.js/api';

export const fetchPlacesInBoundary = createAsyncThunk(
  'places/fetchPlacesInBoundary',
  // async ({ bounds: { ne, sw }, type }) =>
  //   await axios.get('https://www.boredapi.com/api/activity')

  async ({ bounds: { ne, sw }, type, rating }) =>
    await request.get(`/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        ...(rating && { min_rating: rating }),
      },
    })
);

const initialStatePlaces = {
  places: [],
  activePlace: null,
  isLoading: false,
  errorMessage: '',
};

export const placesSlice = createSlice({
  name: 'notes',
  initialState: initialStatePlaces,
  reducers: {
    setActivePlace(state, action) {
      state.activePlace = state.places.find(
        ({ name }) => name === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlacesInBoundary.pending, (state, action) => {
      state.isLoading = true;
      state.places = [];
    });
    builder.addCase(fetchPlacesInBoundary.fulfilled, (state, action) => {
      // const data = {
      //   data: [
      //     {
      //       location_id: '751440',
      //       name: 'Spizarnia Szczecinska',
      //       latitude: '53.428547',
      //       longitude: '14.556335',
      //       num_reviews: '370',
      //       timezone: 'Europe/Warsaw',
      //       location_string:
      //         'Szczecin, Western Pomerania Province, Western Poland',
      //       photo: {
      //         images: {
      //           small: {
      //             width: '150',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-l/19/54/4f/95/watrobka-cieleca.jpg',
      //             height: '150',
      //           },
      //           thumbnail: {
      //             width: '50',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-t/19/54/4f/95/watrobka-cieleca.jpg',
      //             height: '50',
      //           },
      //           original: {
      //             width: '1080',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-o/19/54/4f/95/watrobka-cieleca.jpg',
      //             height: '1080',
      //           },
      //           large: {
      //             width: '550',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-p/19/54/4f/95/watrobka-cieleca.jpg',
      //             height: '550',
      //           },
      //           medium: {
      //             width: '450',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-s/19/54/4f/95/watrobka-cieleca.jpg',
      //             height: '450',
      //           },
      //         },
      //         is_blessed: true,
      //         uploaded_date: '2019-09-20T15:59:59-0400',
      //         caption: 'Wątróbka Cielęca',
      //         id: '424955797',
      //         helpful_votes: '0',
      //         published_date: '2019-09-20T15:59:59-0400',
      //         user: {
      //           user_id: null,
      //           member_id: '0',
      //           type: 'user',
      //         },
      //       },
      //       awards: [],
      //       doubleclick_zone: 'eu.poland',
      //       preferred_map_engine: 'default',
      //       raw_ranking: '4.463675498962402',
      //       ranking_geo: 'Szczecin',
      //       ranking_geo_id: '274736',
      //       ranking_position: '2',
      //       ranking_denominator: '375',
      //       ranking_category: 'restaurant',
      //       ranking: '#1 of 407 Restaurants in Szczecin',
      //       distance: '1.80036288698344',
      //       distance_string: '1.8 km',
      //       bearing: 'east',
      //       rating: '4.5',
      //       is_closed: false,
      //       open_now_text: 'Open Now',
      //       is_long_closed: false,
      //       price_level: '$$ - $$$',
      //       price: '$8 - $54',
      //       description:
      //         "Spiżarnia Szczecińska gives the city a taste. Here, the originality of experiments is combined with the seriousness of culinary classics, chefs' enthusiasm certainly experience, good tries with better. The walls of the Pantry are teeming with shelves set with different sizes of jars. You can try original specialties on the spot. But you can take them with you as well. The atmosphere is calm, because hospitality does its job. Plac Hołdu Pruskiego 8, Szczecin",
      //       web_url:
      //         'https://www.tripadvisor.com/Restaurant_Review-g274736-d751440-Reviews-Spizarnia_Szczecinska-Szczecin_Western_Pomerania_Province_Western_Poland.html',
      //       write_review:
      //         'https://www.tripadvisor.com/UserReview-g274736-d751440-Spizarnia_Szczecinska-Szczecin_Western_Pomerania_Province_Western_Poland.html',
      //       ancestors: [
      //         {
      //           subcategory: [
      //             {
      //               key: 'city',
      //               name: 'City',
      //             },
      //           ],
      //           name: 'Szczecin',
      //           abbrv: null,
      //           location_id: '274736',
      //         },
      //         {
      //           subcategory: [
      //             {
      //               key: 'province',
      //               name: 'Province',
      //             },
      //           ],
      //           name: 'Western Pomerania Province',
      //           abbrv: null,
      //           location_id: '2423116',
      //         },
      //         {
      //           subcategory: [
      //             {
      //               key: 'region',
      //               name: 'Region',
      //             },
      //           ],
      //           name: 'Western Poland',
      //           abbrv: null,
      //           location_id: '274794',
      //         },
      //         {
      //           subcategory: [
      //             {
      //               key: 'country',
      //               name: 'Country',
      //             },
      //           ],
      //           name: 'Poland',
      //           abbrv: null,
      //           location_id: '274723',
      //         },
      //       ],
      //       category: {
      //         key: 'restaurant',
      //         name: 'Restaurant',
      //       },
      //       subcategory: [
      //         {
      //           key: 'sit_down',
      //           name: 'Sit down',
      //         },
      //       ],
      //       parent_display_name: 'Szczecin',
      //       is_jfy_enabled: false,
      //       nearest_metro_station: [],
      //       phone: '+48 788 788 750',
      //       website: 'http://www.spizarniaszczecinska.pl',
      //       email: 'restauracja@spizarniaszczecinska.pl',
      //       address_obj: {
      //         street1: 'ul. Holdu Pruskiego 8',
      //         street2: 'Filharmonia',
      //         city: 'Szczecin',
      //         state: null,
      //         country: 'Poland',
      //         postalcode: '70-550',
      //       },
      //       address:
      //         'ul. Holdu Pruskiego 8 Filharmonia, Szczecin 70-550 Poland',
      //       hours: {
      //         week_ranges: [
      //           [
      //             {
      //               open_time: 720,
      //               close_time: 1260,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 720,
      //               close_time: 1320,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 720,
      //               close_time: 1320,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 720,
      //               close_time: 1320,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 720,
      //               close_time: 1320,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 720,
      //               close_time: 1440,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 720,
      //               close_time: 1440,
      //             },
      //           ],
      //         ],
      //         timezone: 'Europe/Warsaw',
      //       },
      //       is_candidate_for_contact_info_suppression: false,
      //       cuisine: [
      //         {
      //           key: '10700',
      //           name: 'Soups',
      //         },
      //         {
      //           key: '10742',
      //           name: 'Eastern European',
      //         },
      //         {
      //           key: '10637',
      //           name: 'Polish',
      //         },
      //         {
      //           key: '10669',
      //           name: 'Contemporary',
      //         },
      //         {
      //           key: '10679',
      //           name: 'Healthy',
      //         },
      //       ],
      //       dietary_restrictions: [],
      //       booking: {
      //         provider: 'Pyszne.pl',
      //         url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=205516353&geo=751440&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2fXuPMXtK9eAcKiNfFHooEg&cs=1431be3274d3bb656792ff4090ceaeacc',
      //       },
      //       reserve_info: {
      //         id: '751440',
      //         provider: 'Pyszne.pl',
      //         provider_img:
      //           'https://static.tacdn.com/img2/branding/hotels/pyszne.pl_white_05.30.2019.png',
      //         url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=205516353&geo=751440&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2fXuPMXtK9eAcKiNfFHooEg&cs=1431be3274d3bb656792ff4090ceaeacc',
      //         booking_partner_id: null,
      //         racable: false,
      //         api_bookable: false,
      //         timeslots: null,
      //         bestoffer: null,
      //         timeslot_offers: null,
      //         button_text: 'Order Online',
      //         disclaimer_text: null,
      //         banner_text: null,
      //       },
      //       establishment_types: [
      //         {
      //           key: '10591',
      //           name: 'Restaurants',
      //         },
      //       ],
      //     },
      //     {
      //       location_id: '12588952',
      //       name: 'Brasileirinho Brazilian Cuisine & Bar',
      //       latitude: '53.424217',
      //       longitude: '14.560252',
      //       num_reviews: '366',
      //       timezone: 'Europe/Warsaw',
      //       location_string:
      //         'Szczecin, Western Pomerania Province, Western Poland',
      //       photo: {
      //         images: {
      //           small: {
      //             width: '150',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-l/10/b6/df/37/brasileirinho-brazilian.jpg',
      //             height: '150',
      //           },
      //           thumbnail: {
      //             width: '50',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-t/10/b6/df/37/brasileirinho-brazilian.jpg',
      //             height: '50',
      //           },
      //           original: {
      //             width: '640',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-o/10/b6/df/37/brasileirinho-brazilian.jpg',
      //             height: '458',
      //           },
      //           large: {
      //             width: '640',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-o/10/b6/df/37/brasileirinho-brazilian.jpg',
      //             height: '458',
      //           },
      //           medium: {
      //             width: '550',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-s/10/b6/df/37/brasileirinho-brazilian.jpg',
      //             height: '393',
      //           },
      //         },
      //         is_blessed: true,
      //         uploaded_date: '2017-09-19T16:26:18-0400',
      //         caption: ' Brasileirinho Brazilian Kitchen & Bar',
      //         id: '280420151',
      //         helpful_votes: '8',
      //         published_date: '2017-09-19T16:26:18-0400',
      //         user: {
      //           user_id: null,
      //           member_id: '0',
      //           type: 'user',
      //         },
      //       },
      //       awards: [],
      //       doubleclick_zone: 'eu.poland',
      //       preferred_map_engine: 'default',
      //       raw_ranking: '4.434106349945068',
      //       ranking_geo: 'Szczecin',
      //       ranking_geo_id: '274736',
      //       ranking_position: '3',
      //       ranking_denominator: '375',
      //       ranking_category: 'restaurant',
      //       ranking: '#2 of 407 Restaurants in Szczecin',
      //       distance: '2.1800811771016706',
      //       distance_string: '2.2 km',
      //       bearing: 'east',
      //       rating: '4.5',
      //       is_closed: false,
      //       open_now_text: 'Open Now',
      //       is_long_closed: false,
      //       price_level: '$$ - $$$',
      //       price: '$18 - $99',
      //       description:
      //         'After years of involvement, fondness and passion, Brasileirinho (literally small Brasil) has finally been born. A place, which has arisen in our dreams, where you can try true brazilian kitchen and all dishes you will taste, are fusion of memories, life expierence and desires, combined with new techniques and esthetics. Let us take you in a journey, during which we will share with you all tastes and brazilian culture, so you could explore this amazing country by yourself. Please remember that you are always welcome in Brasileirinho as our guest and we cannot wait to host you the best way we can. “Porque tudo o que é feito com amor floresce” “Because everything made with love, blossom” - Haia Marak',
      //       web_url:
      //         'https://www.tripadvisor.com/Restaurant_Review-g274736-d12588952-Reviews-Brasileirinho_Brazilian_Cuisine_Bar-Szczecin_Western_Pomerania_Province_Western_.html',
      //       write_review:
      //         'https://www.tripadvisor.com/UserReview-g274736-d12588952-Brasileirinho_Brazilian_Cuisine_Bar-Szczecin_Western_Pomerania_Province_Western_Poland.html',
      //       ancestors: [
      //         {
      //           subcategory: [
      //             {
      //               key: 'city',
      //               name: 'City',
      //             },
      //           ],
      //           name: 'Szczecin',
      //           abbrv: null,
      //           location_id: '274736',
      //         },
      //         {
      //           subcategory: [
      //             {
      //               key: 'province',
      //               name: 'Province',
      //             },
      //           ],
      //           name: 'Western Pomerania Province',
      //           abbrv: null,
      //           location_id: '2423116',
      //         },
      //         {
      //           subcategory: [
      //             {
      //               key: 'region',
      //               name: 'Region',
      //             },
      //           ],
      //           name: 'Western Poland',
      //           abbrv: null,
      //           location_id: '274794',
      //         },
      //         {
      //           subcategory: [
      //             {
      //               key: 'country',
      //               name: 'Country',
      //             },
      //           ],
      //           name: 'Poland',
      //           abbrv: null,
      //           location_id: '274723',
      //         },
      //       ],
      //       category: {
      //         key: 'restaurant',
      //         name: 'Restaurant',
      //       },
      //       subcategory: [
      //         {
      //           key: 'sit_down',
      //           name: 'Sit down',
      //         },
      //       ],
      //       parent_display_name: 'Szczecin',
      //       is_jfy_enabled: false,
      //       nearest_metro_station: [],
      //       phone: '+48 91 432 92 53',
      //       website: 'http://www.brasileirinho.pl',
      //       email: 'biuro@brasileirinho.pl',
      //       address_obj: {
      //         street1: 'Sienna 10',
      //         street2: null,
      //         city: 'Szczecin',
      //         state: null,
      //         country: 'Poland',
      //         postalcode: '70-542',
      //       },
      //       address: 'Sienna 10, Szczecin 70-542 Poland',
      //       hours: {
      //         week_ranges: [
      //           [
      //             {
      //               open_time: 780,
      //               close_time: 1320,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 780,
      //               close_time: 1380,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 780,
      //               close_time: 1380,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 780,
      //               close_time: 1380,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 780,
      //               close_time: 1380,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 780,
      //               close_time: 1380,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 780,
      //               close_time: 1380,
      //             },
      //           ],
      //         ],
      //         timezone: 'Europe/Warsaw',
      //       },
      //       is_candidate_for_contact_info_suppression: false,
      //       cuisine: [
      //         {
      //           key: '10348',
      //           name: 'Brazilian',
      //         },
      //         {
      //           key: '10651',
      //           name: 'Barbecue',
      //         },
      //         {
      //           key: '10665',
      //           name: 'Vegetarian Friendly',
      //         },
      //         {
      //           key: '10697',
      //           name: 'Vegan Options',
      //         },
      //         {
      //           key: '10992',
      //           name: 'Gluten Free Options',
      //         },
      //       ],
      //       dietary_restrictions: [
      //         {
      //           key: '10665',
      //           name: 'Vegetarian Friendly',
      //         },
      //         {
      //           key: '10697',
      //           name: 'Vegan Options',
      //         },
      //         {
      //           key: '10992',
      //           name: 'Gluten Free Options',
      //         },
      //       ],
      //       establishment_types: [
      //         {
      //           key: '10591',
      //           name: 'Restaurants',
      //         },
      //       ],
      //     },
      //     {
      //       location_id: '14133367',
      //       name: 'Karkut restaurant',
      //       latitude: '53.42687',
      //       longitude: '14.54805',
      //       num_reviews: '167',
      //       timezone: 'Europe/Warsaw',
      //       location_string:
      //         'Szczecin, Western Pomerania Province, Western Poland',
      //       photo: {
      //         images: {
      //           small: {
      //             width: '150',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-l/14/1f/81/d6/dry-aged-beef.jpg',
      //             height: '150',
      //           },
      //           thumbnail: {
      //             width: '50',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-t/14/1f/81/d6/dry-aged-beef.jpg',
      //             height: '50',
      //           },
      //           original: {
      //             width: '1280',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/14/1f/81/d6/dry-aged-beef.jpg',
      //             height: '853',
      //           },
      //           large: {
      //             width: '1024',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-w/14/1f/81/d6/dry-aged-beef.jpg',
      //             height: '683',
      //           },
      //           medium: {
      //             width: '550',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-s/14/1f/81/d6/dry-aged-beef.jpg',
      //             height: '367',
      //           },
      //         },
      //         is_blessed: true,
      //         uploaded_date: '2018-08-13T14:41:31-0400',
      //         caption: 'Dry Aged Beef',
      //         id: '337609174',
      //         helpful_votes: '3',
      //         published_date: '2018-08-13T14:41:31-0400',
      //         user: {
      //           user_id: null,
      //           member_id: '0',
      //           type: 'user',
      //         },
      //       },
      //       awards: [],
      //       doubleclick_zone: 'eu.poland',
      //       preferred_map_engine: 'default',
      //       raw_ranking: '4.40067195892334',
      //       ranking_geo: 'Szczecin',
      //       ranking_geo_id: '274736',
      //       ranking_position: '4',
      //       ranking_denominator: '375',
      //       ranking_category: 'restaurant',
      //       ranking: '#3 of 407 Restaurants in Szczecin',
      //       distance: '1.3189609425758706',
      //       distance_string: '1.3 km',
      //       bearing: 'east',
      //       rating: '4.5',
      //       is_closed: false,
      //       open_now_text: 'Open Now',
      //       is_long_closed: false,
      //       price_level: '$$ - $$$',
      //       price: '$50 - $250',
      //       description:
      //         'Karkut Restaurant - Celebration of Modern Spanish Cuisine with love to the best Dry Aged Beef and fresh seafood.',
      //       web_url:
      //         'https://www.tripadvisor.com/Restaurant_Review-g274736-d14133367-Reviews-Karkut_restaurant-Szczecin_Western_Pomerania_Province_Western_Poland.html',
      //       write_review:
      //         'https://www.tripadvisor.com/UserReview-g274736-d14133367-Karkut_restaurant-Szczecin_Western_Pomerania_Province_Western_Poland.html',
      //       ancestors: [
      //         {
      //           subcategory: [
      //             {
      //               key: 'city',
      //               name: 'City',
      //             },
      //           ],
      //           name: 'Szczecin',
      //           abbrv: null,
      //           location_id: '274736',
      //         },
      //         {
      //           subcategory: [
      //             {
      //               key: 'province',
      //               name: 'Province',
      //             },
      //           ],
      //           name: 'Western Pomerania Province',
      //           abbrv: null,
      //           location_id: '2423116',
      //         },
      //         {
      //           subcategory: [
      //             {
      //               key: 'region',
      //               name: 'Region',
      //             },
      //           ],
      //           name: 'Western Poland',
      //           abbrv: null,
      //           location_id: '274794',
      //         },
      //         {
      //           subcategory: [
      //             {
      //               key: 'country',
      //               name: 'Country',
      //             },
      //           ],
      //           name: 'Poland',
      //           abbrv: null,
      //           location_id: '274723',
      //         },
      //       ],
      //       category: {
      //         key: 'restaurant',
      //         name: 'Restaurant',
      //       },
      //       subcategory: [
      //         {
      //           key: 'sit_down',
      //           name: 'Sit down',
      //         },
      //       ],
      //       parent_display_name: 'Szczecin',
      //       is_jfy_enabled: false,
      //       nearest_metro_station: [],
      //       phone: '+48 720 422 422',
      //       website: 'http://karkut.szczecin.pl',
      //       email: 'info@karkut.szczecin.pl',
      //       address_obj: {
      //         street1: 'ul.Bogurodzicy 1',
      //         street2: null,
      //         city: 'Szczecin',
      //         state: null,
      //         country: 'Poland',
      //         postalcode: '70-400',
      //       },
      //       address: 'ul.Bogurodzicy 1, Szczecin 70-400 Poland',
      //       hours: {
      //         week_ranges: [
      //           [
      //             {
      //               open_time: 780,
      //               close_time: 1320,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 780,
      //               close_time: 1320,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 780,
      //               close_time: 1320,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 780,
      //               close_time: 1320,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 780,
      //               close_time: 1320,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 780,
      //               close_time: 1440,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 780,
      //               close_time: 1440,
      //             },
      //           ],
      //         ],
      //         timezone: 'Europe/Warsaw',
      //       },
      //       is_candidate_for_contact_info_suppression: false,
      //       cuisine: [
      //         {
      //           key: '10643',
      //           name: 'Seafood',
      //         },
      //         {
      //           key: '10655',
      //           name: 'Spanish',
      //         },
      //         {
      //           key: '10665',
      //           name: 'Vegetarian Friendly',
      //         },
      //       ],
      //       dietary_restrictions: [
      //         {
      //           key: '10665',
      //           name: 'Vegetarian Friendly',
      //         },
      //       ],
      //       establishment_types: [
      //         {
      //           key: '10591',
      //           name: 'Restaurants',
      //         },
      //       ],
      //     },
      //     {
      //       location_id: '12511602',
      //       name: 'Paprykarz Fish Market',
      //       latitude: '53.432114',
      //       longitude: '14.548694',
      //       num_reviews: '271',
      //       timezone: 'Europe/Warsaw',
      //       location_string:
      //         'Szczecin, Western Pomerania Province, Western Poland',
      //       photo: {
      //         images: {
      //           small: {
      //             width: '150',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-l/0f/8f/d1/fd/sala.jpg',
      //             height: '150',
      //           },
      //           thumbnail: {
      //             width: '50',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-t/0f/8f/d1/fd/sala.jpg',
      //             height: '50',
      //           },
      //           original: {
      //             width: '1500',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-o/0f/8f/d1/fd/sala.jpg',
      //             height: '2000',
      //           },
      //           large: {
      //             width: '550',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-p/0f/8f/d1/fd/sala.jpg',
      //             height: '733',
      //           },
      //           medium: {
      //             width: '338',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/8f/d1/fd/sala.jpg',
      //             height: '450',
      //           },
      //         },
      //         is_blessed: true,
      //         uploaded_date: '2017-06-13T11:28:14-0400',
      //         caption: 'Sala',
      //         id: '261083645',
      //         helpful_votes: '2',
      //         published_date: '2017-06-13T11:28:14-0400',
      //         user: {
      //           user_id: null,
      //           member_id: '0',
      //           type: 'user',
      //         },
      //       },
      //       awards: [],
      //       doubleclick_zone: 'eu.poland',
      //       preferred_map_engine: 'default',
      //       raw_ranking: '4.344122409820557',
      //       ranking_geo: 'Szczecin',
      //       ranking_geo_id: '274736',
      //       ranking_position: '5',
      //       ranking_denominator: '375',
      //       ranking_category: 'restaurant',
      //       ranking: '#4 of 407 Restaurants in Szczecin',
      //       distance: '1.2720705295919503',
      //       distance_string: '1.3 km',
      //       bearing: 'east',
      //       rating: '4.5',
      //       is_closed: false,
      //       open_now_text: 'Open Now',
      //       is_long_closed: false,
      //       price_level: '$$ - $$$',
      //       description: '',
      //       web_url:
      //         'https://www.tripadvisor.com/Restaurant_Review-g274736-d12511602-Reviews-Paprykarz_Fish_Market-Szczecin_Western_Pomerania_Province_Western_Poland.html',
      //       write_review:
      //         'https://www.tripadvisor.com/UserReview-g274736-d12511602-Paprykarz_Fish_Market-Szczecin_Western_Pomerania_Province_Western_Poland.html',
      //       ancestors: [
      //         {
      //           subcategory: [
      //             {
      //               key: 'city',
      //               name: 'City',
      //             },
      //           ],
      //           name: 'Szczecin',
      //           abbrv: null,
      //           location_id: '274736',
      //         },
      //         {
      //           subcategory: [
      //             {
      //               key: 'province',
      //               name: 'Province',
      //             },
      //           ],
      //           name: 'Western Pomerania Province',
      //           abbrv: null,
      //           location_id: '2423116',
      //         },
      //         {
      //           subcategory: [
      //             {
      //               key: 'region',
      //               name: 'Region',
      //             },
      //           ],
      //           name: 'Western Poland',
      //           abbrv: null,
      //           location_id: '274794',
      //         },
      //         {
      //           subcategory: [
      //             {
      //               key: 'country',
      //               name: 'Country',
      //             },
      //           ],
      //           name: 'Poland',
      //           abbrv: null,
      //           location_id: '274723',
      //         },
      //       ],
      //       category: {
      //         key: 'restaurant',
      //         name: 'Restaurant',
      //       },
      //       subcategory: [],
      //       parent_display_name: 'Szczecin',
      //       is_jfy_enabled: false,
      //       nearest_metro_station: [],
      //       phone: '+48 91 433 22 33',
      //       website: 'http://paprykarz.com.pl',
      //       address_obj: {
      //         street1: 'Aleja Papieza Jana Pawla II 42',
      //         street2: null,
      //         city: 'Szczecin',
      //         state: null,
      //         country: 'Poland',
      //         postalcode: '70-001',
      //       },
      //       address: 'Aleja Papieza Jana Pawla II 42, Szczecin 70-001 Poland',
      //       hours: {
      //         week_ranges: [
      //           [
      //             {
      //               open_time: 720,
      //               close_time: 1320,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 720,
      //               close_time: 1380,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 720,
      //               close_time: 1380,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 720,
      //               close_time: 1380,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 720,
      //               close_time: 1380,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 720,
      //               close_time: 1440,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 720,
      //               close_time: 1440,
      //             },
      //           ],
      //         ],
      //         timezone: 'Europe/Warsaw',
      //       },
      //       is_candidate_for_contact_info_suppression: false,
      //       cuisine: [
      //         {
      //           key: '10643',
      //           name: 'Seafood',
      //         },
      //         {
      //           key: '10649',
      //           name: 'Mediterranean',
      //         },
      //         {
      //           key: '10654',
      //           name: 'European',
      //         },
      //         {
      //           key: '10746',
      //           name: 'Central European',
      //         },
      //         {
      //           key: '10665',
      //           name: 'Vegetarian Friendly',
      //         },
      //         {
      //           key: '10992',
      //           name: 'Gluten Free Options',
      //         },
      //       ],
      //       dietary_restrictions: [
      //         {
      //           key: '10665',
      //           name: 'Vegetarian Friendly',
      //         },
      //         {
      //           key: '10992',
      //           name: 'Gluten Free Options',
      //         },
      //       ],
      //       establishment_types: [
      //         {
      //           key: '10591',
      //           name: 'Restaurants',
      //         },
      //       ],
      //     },
      //     {
      //       location_id: '274736',
      //       ad_position: 'inline1',
      //       ad_size: '8X8',
      //       doubleclick_zone: 'eu.poland',
      //       ancestors: [
      //         {
      //           subcategory: [
      //             {
      //               key: 'province',
      //               name: 'Province',
      //             },
      //           ],
      //           name: 'Western Pomerania Province',
      //           abbrv: null,
      //           location_id: '2423116',
      //         },
      //         {
      //           subcategory: [
      //             {
      //               key: 'region',
      //               name: 'Region',
      //             },
      //           ],
      //           name: 'Western Poland',
      //           abbrv: null,
      //           location_id: '274794',
      //         },
      //         {
      //           subcategory: [
      //             {
      //               key: 'country',
      //               name: 'Country',
      //             },
      //           ],
      //           name: 'Poland',
      //           abbrv: null,
      //           location_id: '274723',
      //         },
      //       ],
      //       detail: '0',
      //       page_type: 'restaurants',
      //       mob_ptype: 'app_restaurants',
      //     },
      //     {
      //       location_id: '10728453',
      //       name: '17 Schodow Cocktail bar',
      //       latitude: '53.4247',
      //       longitude: '14.561692',
      //       num_reviews: '142',
      //       timezone: 'Europe/Warsaw',
      //       location_string:
      //         'Szczecin, Western Pomerania Province, Western Poland',
      //       photo: {
      //         images: {
      //           small: {
      //             width: '150',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-l/19/a7/c3/bb/caption.jpg',
      //             height: '150',
      //           },
      //           thumbnail: {
      //             width: '50',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-t/19/a7/c3/bb/caption.jpg',
      //             height: '50',
      //           },
      //           original: {
      //             width: '1280',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/19/a7/c3/bb/caption.jpg',
      //             height: '854',
      //           },
      //           large: {
      //             width: '1024',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-w/19/a7/c3/bb/caption.jpg',
      //             height: '683',
      //           },
      //           medium: {
      //             width: '550',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-s/19/a7/c3/bb/caption.jpg',
      //             height: '367',
      //           },
      //         },
      //         is_blessed: true,
      //         uploaded_date: '2019-10-16T17:38:49-0400',
      //         caption: '.',
      //         id: '430425019',
      //         helpful_votes: '2',
      //         published_date: '2019-10-16T17:38:49-0400',
      //         user: {
      //           user_id: null,
      //           member_id: '0',
      //           type: 'user',
      //         },
      //       },
      //       awards: [],
      //       doubleclick_zone: 'eu.poland',
      //       preferred_map_engine: 'default',
      //       raw_ranking: '4.341291904449463',
      //       ranking_geo: 'Szczecin',
      //       ranking_geo_id: '274736',
      //       ranking_position: '6',
      //       ranking_denominator: '375',
      //       ranking_category: 'restaurant',
      //       ranking: '#5 of 407 Restaurants in Szczecin',
      //       distance: '2.2514569094804138',
      //       distance_string: '2.3 km',
      //       bearing: 'east',
      //       rating: '5.0',
      //       is_closed: false,
      //       open_now_text: 'Open Now',
      //       is_long_closed: false,
      //       price_level: '$',
      //       price: '$15 - $50',
      //       description:
      //         "17 Schodów is an incredible cocktailbar in Szczecin's old town. It is famous for its unique atmosphere, cocktails and the largest selection of spirits in Szczecin. More than 450 different bottles of alcohol are available and if Guests get hungry they can try appetizers that combine perfectly with cocktails and spirits served by our staff.",
      //       web_url:
      //         'https://www.tripadvisor.com/Restaurant_Review-g274736-d10728453-Reviews-17_Schodow_Cocktail_bar-Szczecin_Western_Pomerania_Province_Western_Poland.html',
      //       write_review:
      //         'https://www.tripadvisor.com/UserReview-g274736-d10728453-17_Schodow_Cocktail_bar-Szczecin_Western_Pomerania_Province_Western_Poland.html',
      //       ancestors: [
      //         {
      //           subcategory: [
      //             {
      //               key: 'city',
      //               name: 'City',
      //             },
      //           ],
      //           name: 'Szczecin',
      //           abbrv: null,
      //           location_id: '274736',
      //         },
      //         {
      //           subcategory: [
      //             {
      //               key: 'province',
      //               name: 'Province',
      //             },
      //           ],
      //           name: 'Western Pomerania Province',
      //           abbrv: null,
      //           location_id: '2423116',
      //         },
      //         {
      //           subcategory: [
      //             {
      //               key: 'region',
      //               name: 'Region',
      //             },
      //           ],
      //           name: 'Western Poland',
      //           abbrv: null,
      //           location_id: '274794',
      //         },
      //         {
      //           subcategory: [
      //             {
      //               key: 'country',
      //               name: 'Country',
      //             },
      //           ],
      //           name: 'Poland',
      //           abbrv: null,
      //           location_id: '274723',
      //         },
      //       ],
      //       category: {
      //         key: 'restaurant',
      //         name: 'Restaurant',
      //       },
      //       subcategory: [
      //         {
      //           key: 'sit_down',
      //           name: 'Sit down',
      //         },
      //       ],
      //       parent_display_name: 'Szczecin',
      //       is_jfy_enabled: false,
      //       nearest_metro_station: [],
      //       phone: '+48 723 895 123',
      //       website: 'http://www.17schodow.com',
      //       email: 'info@17schodow.com',
      //       address_obj: {
      //         street1: 'Targ Rybny 1',
      //         street2: null,
      //         city: 'Szczecin',
      //         state: null,
      //         country: 'Poland',
      //         postalcode: '70-535',
      //       },
      //       address: 'Targ Rybny 1, Szczecin 70-535 Poland',
      //       hours: {
      //         week_ranges: [
      //           [
      //             {
      //               open_time: 1080,
      //               close_time: 1440,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 1080,
      //               close_time: 1440,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 1080,
      //               close_time: 1500,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 1080,
      //               close_time: 1500,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 1080,
      //               close_time: 1440,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 1080,
      //               close_time: 1560,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 1080,
      //               close_time: 1440,
      //             },
      //           ],
      //         ],
      //         timezone: 'Europe/Warsaw',
      //       },
      //       is_candidate_for_contact_info_suppression: false,
      //       cuisine: [
      //         {
      //           key: '10640',
      //           name: 'Bar',
      //         },
      //       ],
      //       dietary_restrictions: [],
      //       establishment_types: [
      //         {
      //           key: '10591',
      //           name: 'Restaurants',
      //         },
      //       ],
      //     },
      //     {
      //       location_id: '786106',
      //       name: 'Radecki Restauracja Zbigniew Radecki',
      //       latitude: '53.427246',
      //       longitude: '14.552905',
      //       num_reviews: '400',
      //       timezone: 'Europe/Warsaw',
      //       location_string:
      //         'Szczecin, Western Pomerania Province, Western Poland',
      //       photo: {
      //         images: {
      //           small: {
      //             width: '150',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-l/10/12/93/c3/photo0jpg.jpg',
      //             height: '150',
      //           },
      //           thumbnail: {
      //             width: '50',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-t/10/12/93/c3/photo0jpg.jpg',
      //             height: '50',
      //           },
      //           original: {
      //             width: '2048',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-o/10/12/93/c3/photo0jpg.jpg',
      //             height: '1536',
      //           },
      //           large: {
      //             width: '550',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-s/10/12/93/c3/photo0jpg.jpg',
      //             height: '413',
      //           },
      //           medium: {
      //             width: '250',
      //             url: 'https://media-cdn.tripadvisor.com/media/photo-f/10/12/93/c3/photo0jpg.jpg',
      //             height: '188',
      //           },
      //         },
      //         is_blessed: true,
      //         uploaded_date: '2017-07-30T00:34:23-0400',
      //         caption: '',
      //         id: '269652931',
      //         helpful_votes: '3',
      //         published_date: '2017-07-30T00:34:23-0400',
      //         user: {
      //           user_id: null,
      //           member_id: '0',
      //           type: 'user',
      //         },
      //       },
      //       awards: [],
      //       doubleclick_zone: 'eu.poland',
      //       preferred_map_engine: 'default',
      //       raw_ranking: '4.297168731689453',
      //       ranking_geo: 'Szczecin',
      //       ranking_geo_id: '274736',
      //       ranking_position: '7',
      //       ranking_denominator: '375',
      //       ranking_category: 'restaurant',
      //       ranking: '#6 of 407 Restaurants in Szczecin',
      //       distance: '1.6104049947185808',
      //       distance_string: '1.6 km',
      //       bearing: 'east',
      //       rating: '4.5',
      //       is_closed: false,
      //       open_now_text: 'Open Now',
      //       is_long_closed: false,
      //       price_level: '$$ - $$$',
      //       price: '$7 - $27',
      //       description: '',
      //       web_url:
      //         'https://www.tripadvisor.com/Restaurant_Review-g274736-d786106-Reviews-Radecki_Restauracja_Zbigniew_Radecki-Szczecin_Western_Pomerania_Province_Western_P.html',
      //       write_review:
      //         'https://www.tripadvisor.com/UserReview-g274736-d786106-Radecki_Restauracja_Zbigniew_Radecki-Szczecin_Western_Pomerania_Province_Western_Poland.html',
      //       ancestors: [
      //         {
      //           subcategory: [
      //             {
      //               key: 'city',
      //               name: 'City',
      //             },
      //           ],
      //           name: 'Szczecin',
      //           abbrv: null,
      //           location_id: '274736',
      //         },
      //         {
      //           subcategory: [
      //             {
      //               key: 'province',
      //               name: 'Province',
      //             },
      //           ],
      //           name: 'Western Pomerania Province',
      //           abbrv: null,
      //           location_id: '2423116',
      //         },
      //         {
      //           subcategory: [
      //             {
      //               key: 'region',
      //               name: 'Region',
      //             },
      //           ],
      //           name: 'Western Poland',
      //           abbrv: null,
      //           location_id: '274794',
      //         },
      //         {
      //           subcategory: [
      //             {
      //               key: 'country',
      //               name: 'Country',
      //             },
      //           ],
      //           name: 'Poland',
      //           abbrv: null,
      //           location_id: '274723',
      //         },
      //       ],
      //       category: {
      //         key: 'restaurant',
      //         name: 'Restaurant',
      //       },
      //       subcategory: [
      //         {
      //           key: 'sit_down',
      //           name: 'Sit down',
      //         },
      //       ],
      //       parent_display_name: 'Szczecin',
      //       is_jfy_enabled: false,
      //       nearest_metro_station: [],
      //       phone: '+48 91 425 27 15',
      //       website: 'http://www.radecki.com.pl/',
      //       email: 'biuro@radecki.com.pl',
      //       address_obj: {
      //         street1: 'ul. Tkacka 12',
      //         street2: '',
      //         city: 'Szczecin',
      //         state: null,
      //         country: 'Poland',
      //         postalcode: '70-556',
      //       },
      //       address: 'ul. Tkacka 12, Szczecin 70-556 Poland',
      //       hours: {
      //         week_ranges: [
      //           [
      //             {
      //               open_time: 720,
      //               close_time: 1320,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 720,
      //               close_time: 1440,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 720,
      //               close_time: 1440,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 720,
      //               close_time: 1440,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 720,
      //               close_time: 1440,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 720,
      //               close_time: 1440,
      //             },
      //           ],
      //           [
      //             {
      //               open_time: 720,
      //               close_time: 1440,
      //             },
      //           ],
      //         ],
      //         timezone: 'Europe/Warsaw',
      //       },
      //       is_candidate_for_contact_info_suppression: false,
      //       cuisine: [
      //         {
      //           key: '4617',
      //           name: 'Italian',
      //         },
      //         {
      //           key: '10637',
      //           name: 'Polish',
      //         },
      //         {
      //           key: '10654',
      //           name: 'European',
      //         },
      //         {
      //           key: '10746',
      //           name: 'Central European',
      //         },
      //         {
      //           key: '10665',
      //           name: 'Vegetarian Friendly',
      //         },
      //         {
      //           key: '10697',
      //           name: 'Vegan Options',
      //         },
      //         {
      //           key: '10992',
      //           name: 'Gluten Free Options',
      //         },
      //       ],
      //       dietary_restrictions: [
      //         {
      //           key: '10665',
      //           name: 'Vegetarian Friendly',
      //         },
      //         {
      //           key: '10697',
      //           name: 'Vegan Options',
      //         },
      //         {
      //           key: '10992',
      //           name: 'Gluten Free Options',
      //         },
      //       ],
      //       establishment_types: [
      //         {
      //           key: '10591',
      //           name: 'Restaurants',
      //         },
      //       ],
      //     },
      //   ],
      // };
      // state.places = data.data.filter((r) => r.name);
      state.places = action.payload.data.data.filter((r) => r.name);

      state.isLoading = false;
    });
    builder.addCase(fetchPlacesInBoundary.rejected, (state, action) => {
      state.places = [];
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setActivePlace } = placesSlice.actions;
