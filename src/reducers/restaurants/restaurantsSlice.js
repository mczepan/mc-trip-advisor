import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import request from 'common.js/api';

export const fetchRestaurantsInBoundary = createAsyncThunk(
  'restaurants/fetchRestaurantsInBoundary',
  async ({ ne, sw }) => await axios.get('https://www.boredapi.com/api/activity')

  // async ({ ne, sw }) =>
  //   await request.get('/restaurants/list-in-boundary', {
  //     params: {
  //       bl_latitude: sw.lat,
  //       tr_latitude: ne.lat,
  //       bl_longitude: sw.lng,
  //       tr_longitude: ne.lng,
  //     },
  //   })
);

const initialStateRestaurants = {
  restaurants: [],
  loading: false,
  errorMessage: '',
};

export const restaurantsSlice = createSlice({
  name: 'notes',
  initialState: initialStateRestaurants,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurantsInBoundary.pending, (state, action) => {
      state.loading = true;
      state.restaurants = [];
    });
    builder.addCase(fetchRestaurantsInBoundary.fulfilled, (state, action) => {
      // state.restaurants = action.payload.data.data.filter((r) => r.name);
      const data = {
        data: [
          {
            location_id: '751440',
            name: 'Spizarnia Szczecinska',
            latitude: '53.428547',
            longitude: '14.556335',
            num_reviews: '370',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/19/54/4f/95/watrobka-cieleca.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/19/54/4f/95/watrobka-cieleca.jpg',
                  height: '50',
                },
                original: {
                  width: '1080',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/19/54/4f/95/watrobka-cieleca.jpg',
                  height: '1080',
                },
                large: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-p/19/54/4f/95/watrobka-cieleca.jpg',
                  height: '550',
                },
                medium: {
                  width: '450',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/19/54/4f/95/watrobka-cieleca.jpg',
                  height: '450',
                },
              },
              is_blessed: true,
              uploaded_date: '2019-09-20T15:59:59-0400',
              caption: 'Wątróbka Cielęca',
              id: '424955797',
              helpful_votes: '0',
              published_date: '2019-09-20T15:59:59-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '4.463675498962402',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '2',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#1 of 407 Restaurants in Szczecin',
            distance: '1.80036288698344',
            distance_string: '1.8 km',
            bearing: 'east',
            rating: '4.5',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$$ - $$$',
            price: '$8 - $54',
            description:
              "Spiżarnia Szczecińska gives the city a taste. Here, the originality of experiments is combined with the seriousness of culinary classics, chefs' enthusiasm certainly experience, good tries with better. The walls of the Pantry are teeming with shelves set with different sizes of jars. You can try original specialties on the spot. But you can take them with you as well. The atmosphere is calm, because hospitality does its job. Plac Hołdu Pruskiego 8, Szczecin",
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d751440-Reviews-Spizarnia_Szczecinska-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d751440-Spizarnia_Szczecinska-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'sit_down',
                name: 'Sit down',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 788 788 750',
            website: 'http://www.spizarniaszczecinska.pl',
            email: 'restauracja@spizarniaszczecinska.pl',
            address_obj: {
              street1: 'ul. Holdu Pruskiego 8',
              street2: 'Filharmonia',
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-550',
            },
            address:
              'ul. Holdu Pruskiego 8 Filharmonia, Szczecin 70-550 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 720,
                    close_time: 1260,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1440,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '10700',
                name: 'Soups',
              },
              {
                key: '10742',
                name: 'Eastern European',
              },
              {
                key: '10637',
                name: 'Polish',
              },
              {
                key: '10669',
                name: 'Contemporary',
              },
              {
                key: '10679',
                name: 'Healthy',
              },
            ],
            dietary_restrictions: [],
            booking: {
              provider: 'Pyszne.pl',
              url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=205516353&geo=751440&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2fXuPMXtK9eAcKiNfFHooEg&cs=1431be3274d3bb656792ff4090ceaeacc',
            },
            reserve_info: {
              id: '751440',
              provider: 'Pyszne.pl',
              provider_img:
                'https://static.tacdn.com/img2/branding/hotels/pyszne.pl_white_05.30.2019.png',
              url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=205516353&geo=751440&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2fXuPMXtK9eAcKiNfFHooEg&cs=1431be3274d3bb656792ff4090ceaeacc',
              booking_partner_id: null,
              racable: false,
              api_bookable: false,
              timeslots: null,
              bestoffer: null,
              timeslot_offers: null,
              button_text: 'Order Online',
              disclaimer_text: null,
              banner_text: null,
            },
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '12588952',
            name: 'Brasileirinho Brazilian Cuisine & Bar',
            latitude: '53.424217',
            longitude: '14.560252',
            num_reviews: '366',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/10/b6/df/37/brasileirinho-brazilian.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/10/b6/df/37/brasileirinho-brazilian.jpg',
                  height: '50',
                },
                original: {
                  width: '640',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/10/b6/df/37/brasileirinho-brazilian.jpg',
                  height: '458',
                },
                large: {
                  width: '640',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/10/b6/df/37/brasileirinho-brazilian.jpg',
                  height: '458',
                },
                medium: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/10/b6/df/37/brasileirinho-brazilian.jpg',
                  height: '393',
                },
              },
              is_blessed: true,
              uploaded_date: '2017-09-19T16:26:18-0400',
              caption: ' Brasileirinho Brazilian Kitchen & Bar',
              id: '280420151',
              helpful_votes: '8',
              published_date: '2017-09-19T16:26:18-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '4.434106349945068',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '3',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#2 of 407 Restaurants in Szczecin',
            distance: '2.1800811771016706',
            distance_string: '2.2 km',
            bearing: 'east',
            rating: '4.5',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$$ - $$$',
            price: '$18 - $99',
            description:
              'After years of involvement, fondness and passion, Brasileirinho (literally small Brasil) has finally been born. A place, which has arisen in our dreams, where you can try true brazilian kitchen and all dishes you will taste, are fusion of memories, life expierence and desires, combined with new techniques and esthetics. Let us take you in a journey, during which we will share with you all tastes and brazilian culture, so you could explore this amazing country by yourself. Please remember that you are always welcome in Brasileirinho as our guest and we cannot wait to host you the best way we can. “Porque tudo o que é feito com amor floresce” “Because everything made with love, blossom” - Haia Marak',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d12588952-Reviews-Brasileirinho_Brazilian_Cuisine_Bar-Szczecin_Western_Pomerania_Province_Western_.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d12588952-Brasileirinho_Brazilian_Cuisine_Bar-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'sit_down',
                name: 'Sit down',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 91 432 92 53',
            website: 'http://www.brasileirinho.pl',
            email: 'biuro@brasileirinho.pl',
            address_obj: {
              street1: 'Sienna 10',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-542',
            },
            address: 'Sienna 10, Szczecin 70-542 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 780,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '10348',
                name: 'Brazilian',
              },
              {
                key: '10651',
                name: 'Barbecue',
              },
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
              {
                key: '10992',
                name: 'Gluten Free Options',
              },
            ],
            dietary_restrictions: [
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
              {
                key: '10992',
                name: 'Gluten Free Options',
              },
            ],
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '14133367',
            name: 'Karkut restaurant',
            latitude: '53.42687',
            longitude: '14.54805',
            num_reviews: '167',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/14/1f/81/d6/dry-aged-beef.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/14/1f/81/d6/dry-aged-beef.jpg',
                  height: '50',
                },
                original: {
                  width: '1280',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/14/1f/81/d6/dry-aged-beef.jpg',
                  height: '853',
                },
                large: {
                  width: '1024',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-w/14/1f/81/d6/dry-aged-beef.jpg',
                  height: '683',
                },
                medium: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/14/1f/81/d6/dry-aged-beef.jpg',
                  height: '367',
                },
              },
              is_blessed: true,
              uploaded_date: '2018-08-13T14:41:31-0400',
              caption: 'Dry Aged Beef',
              id: '337609174',
              helpful_votes: '3',
              published_date: '2018-08-13T14:41:31-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '4.40067195892334',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '4',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#3 of 407 Restaurants in Szczecin',
            distance: '1.3189609425758706',
            distance_string: '1.3 km',
            bearing: 'east',
            rating: '4.5',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$$ - $$$',
            price: '$50 - $250',
            description:
              'Karkut Restaurant - Celebration of Modern Spanish Cuisine with love to the best Dry Aged Beef and fresh seafood.',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d14133367-Reviews-Karkut_restaurant-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d14133367-Karkut_restaurant-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'sit_down',
                name: 'Sit down',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 720 422 422',
            website: 'http://karkut.szczecin.pl',
            email: 'info@karkut.szczecin.pl',
            address_obj: {
              street1: 'ul.Bogurodzicy 1',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-400',
            },
            address: 'ul.Bogurodzicy 1, Szczecin 70-400 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 780,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1440,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '10643',
                name: 'Seafood',
              },
              {
                key: '10655',
                name: 'Spanish',
              },
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
            ],
            dietary_restrictions: [
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
            ],
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '12511602',
            name: 'Paprykarz Fish Market',
            latitude: '53.432114',
            longitude: '14.548694',
            num_reviews: '271',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/0f/8f/d1/fd/sala.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/0f/8f/d1/fd/sala.jpg',
                  height: '50',
                },
                original: {
                  width: '1500',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/0f/8f/d1/fd/sala.jpg',
                  height: '2000',
                },
                large: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-p/0f/8f/d1/fd/sala.jpg',
                  height: '733',
                },
                medium: {
                  width: '338',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/8f/d1/fd/sala.jpg',
                  height: '450',
                },
              },
              is_blessed: true,
              uploaded_date: '2017-06-13T11:28:14-0400',
              caption: 'Sala',
              id: '261083645',
              helpful_votes: '2',
              published_date: '2017-06-13T11:28:14-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '4.344122409820557',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '5',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#4 of 407 Restaurants in Szczecin',
            distance: '1.2720705295919503',
            distance_string: '1.3 km',
            bearing: 'east',
            rating: '4.5',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$$ - $$$',
            description: '',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d12511602-Reviews-Paprykarz_Fish_Market-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d12511602-Paprykarz_Fish_Market-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 91 433 22 33',
            website: 'http://paprykarz.com.pl',
            address_obj: {
              street1: 'Aleja Papieza Jana Pawla II 42',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-001',
            },
            address: 'Aleja Papieza Jana Pawla II 42, Szczecin 70-001 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 720,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1440,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '10643',
                name: 'Seafood',
              },
              {
                key: '10649',
                name: 'Mediterranean',
              },
              {
                key: '10654',
                name: 'European',
              },
              {
                key: '10746',
                name: 'Central European',
              },
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10992',
                name: 'Gluten Free Options',
              },
            ],
            dietary_restrictions: [
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10992',
                name: 'Gluten Free Options',
              },
            ],
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '274736',
            ad_position: 'inline1',
            ad_size: '8X8',
            doubleclick_zone: 'eu.poland',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            detail: '0',
            page_type: 'restaurants',
            mob_ptype: 'app_restaurants',
          },
          {
            location_id: '10728453',
            name: '17 Schodow Cocktail bar',
            latitude: '53.4247',
            longitude: '14.561692',
            num_reviews: '142',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/19/a7/c3/bb/caption.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/19/a7/c3/bb/caption.jpg',
                  height: '50',
                },
                original: {
                  width: '1280',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/19/a7/c3/bb/caption.jpg',
                  height: '854',
                },
                large: {
                  width: '1024',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-w/19/a7/c3/bb/caption.jpg',
                  height: '683',
                },
                medium: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/19/a7/c3/bb/caption.jpg',
                  height: '367',
                },
              },
              is_blessed: true,
              uploaded_date: '2019-10-16T17:38:49-0400',
              caption: '.',
              id: '430425019',
              helpful_votes: '2',
              published_date: '2019-10-16T17:38:49-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '4.341291904449463',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '6',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#5 of 407 Restaurants in Szczecin',
            distance: '2.2514569094804138',
            distance_string: '2.3 km',
            bearing: 'east',
            rating: '5.0',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$',
            price: '$15 - $50',
            description:
              "17 Schodów is an incredible cocktailbar in Szczecin's old town. It is famous for its unique atmosphere, cocktails and the largest selection of spirits in Szczecin. More than 450 different bottles of alcohol are available and if Guests get hungry they can try appetizers that combine perfectly with cocktails and spirits served by our staff.",
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d10728453-Reviews-17_Schodow_Cocktail_bar-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d10728453-17_Schodow_Cocktail_bar-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'sit_down',
                name: 'Sit down',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 723 895 123',
            website: 'http://www.17schodow.com',
            email: 'info@17schodow.com',
            address_obj: {
              street1: 'Targ Rybny 1',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-535',
            },
            address: 'Targ Rybny 1, Szczecin 70-535 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 1080,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 1080,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 1080,
                    close_time: 1500,
                  },
                ],
                [
                  {
                    open_time: 1080,
                    close_time: 1500,
                  },
                ],
                [
                  {
                    open_time: 1080,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 1080,
                    close_time: 1560,
                  },
                ],
                [
                  {
                    open_time: 1080,
                    close_time: 1440,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '10640',
                name: 'Bar',
              },
            ],
            dietary_restrictions: [],
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '786106',
            name: 'Radecki Restauracja Zbigniew Radecki',
            latitude: '53.427246',
            longitude: '14.552905',
            num_reviews: '400',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/10/12/93/c3/photo0jpg.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/10/12/93/c3/photo0jpg.jpg',
                  height: '50',
                },
                original: {
                  width: '2048',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/10/12/93/c3/photo0jpg.jpg',
                  height: '1536',
                },
                large: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/10/12/93/c3/photo0jpg.jpg',
                  height: '413',
                },
                medium: {
                  width: '250',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-f/10/12/93/c3/photo0jpg.jpg',
                  height: '188',
                },
              },
              is_blessed: true,
              uploaded_date: '2017-07-30T00:34:23-0400',
              caption: '',
              id: '269652931',
              helpful_votes: '3',
              published_date: '2017-07-30T00:34:23-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '4.297168731689453',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '7',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#6 of 407 Restaurants in Szczecin',
            distance: '1.6104049947185808',
            distance_string: '1.6 km',
            bearing: 'east',
            rating: '4.5',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$$ - $$$',
            price: '$7 - $27',
            description: '',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d786106-Reviews-Radecki_Restauracja_Zbigniew_Radecki-Szczecin_Western_Pomerania_Province_Western_P.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d786106-Radecki_Restauracja_Zbigniew_Radecki-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'sit_down',
                name: 'Sit down',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 91 425 27 15',
            website: 'http://www.radecki.com.pl/',
            email: 'biuro@radecki.com.pl',
            address_obj: {
              street1: 'ul. Tkacka 12',
              street2: '',
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-556',
            },
            address: 'ul. Tkacka 12, Szczecin 70-556 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 720,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1440,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '4617',
                name: 'Italian',
              },
              {
                key: '10637',
                name: 'Polish',
              },
              {
                key: '10654',
                name: 'European',
              },
              {
                key: '10746',
                name: 'Central European',
              },
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
              {
                key: '10992',
                name: 'Gluten Free Options',
              },
            ],
            dietary_restrictions: [
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
              {
                key: '10992',
                name: 'Gluten Free Options',
              },
            ],
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '6594213',
            name: "Tokyo Sushi'n'Grill",
            latitude: '53.423923',
            longitude: '14.559453',
            num_reviews: '317',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/0f/a3/ff/6d/sushi.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/0f/a3/ff/6d/sushi.jpg',
                  height: '50',
                },
                original: {
                  width: '900',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/0f/a3/ff/6d/sushi.jpg',
                  height: '595',
                },
                large: {
                  width: '900',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/0f/a3/ff/6d/sushi.jpg',
                  height: '595',
                },
                medium: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/a3/ff/6d/sushi.jpg',
                  height: '363',
                },
              },
              is_blessed: true,
              uploaded_date: '2017-06-21T15:00:16-0400',
              caption: 'Sushi',
              id: '262405997',
              helpful_votes: '2',
              published_date: '2017-06-21T15:00:16-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '4.239546775817871',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '9',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#7 of 407 Restaurants in Szczecin',
            distance: '2.1429174414007206',
            distance_string: '2.1 km',
            bearing: 'east',
            rating: '4.5',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$$$$',
            price: '$5 - $60',
            description: '',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d6594213-Reviews-Tokyo_Sushi_n_Grill-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d6594213-Tokyo_Sushi_n_Grill-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'sit_down',
                name: 'Sit down',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 91 433 71 40',
            website: 'http://www.tokyorestaurant.pl',
            email: 'tokyo@tokyorestaurant.pl',
            address_obj: {
              street1: 'ul. Rynek Sienny 3',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-542',
            },
            address: 'ul. Rynek Sienny 3, Szczecin 70-542 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '5473',
                name: 'Japanese',
              },
              {
                key: '10653',
                name: 'Sushi',
              },
              {
                key: '10659',
                name: 'Asian',
              },
              {
                key: '10668',
                name: 'Grill',
              },
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
              {
                key: '10992',
                name: 'Gluten Free Options',
              },
            ],
            dietary_restrictions: [
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
              {
                key: '10992',
                name: 'Gluten Free Options',
              },
            ],
            booking: {
              provider: 'Pyszne.pl',
              url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=202959964&geo=6594213&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2bLLJDMA_lxZyIIW5Dcd4E8&cs=1736398d93990d7af6525a4387dfc356b',
            },
            reserve_info: {
              id: '6594213',
              provider: 'Pyszne.pl',
              provider_img:
                'https://static.tacdn.com/img2/branding/hotels/pyszne.pl_white_05.30.2019.png',
              url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=202959964&geo=6594213&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2bLLJDMA_lxZyIIW5Dcd4E8&cs=1736398d93990d7af6525a4387dfc356b',
              booking_partner_id: null,
              racable: false,
              api_bookable: false,
              timeslots: null,
              bestoffer: null,
              timeslot_offers: null,
              button_text: 'Order Online',
              disclaimer_text: null,
              banner_text: null,
            },
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '4697290',
            name: 'Ukraineczka',
            latitude: '53.42545',
            longitude: '14.561292',
            num_reviews: '328',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/12/0b/45/42/ukraineczka.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/12/0b/45/42/ukraineczka.jpg',
                  height: '50',
                },
                original: {
                  width: '1080',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/12/0b/45/42/ukraineczka.jpg',
                  height: '952',
                },
                large: {
                  width: '511',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/12/0b/45/42/ukraineczka.jpg',
                  height: '450',
                },
                medium: {
                  width: '233',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-f/12/0b/45/42/ukraineczka.jpg',
                  height: '205',
                },
              },
              is_blessed: true,
              uploaded_date: '2018-02-13T14:16:28-0500',
              caption: 'Ukraineczka',
              id: '302728514',
              helpful_votes: '2',
              published_date: '2018-02-13T14:16:28-0500',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '4.203153610229492',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '10',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#8 of 407 Restaurants in Szczecin',
            distance: '2.200512787650276',
            distance_string: '2.2 km',
            bearing: 'east',
            rating: '4.0',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$$ - $$$',
            description: '',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d4697290-Reviews-Ukraineczka-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d4697290-Ukraineczka-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'sit_down',
                name: 'Sit down',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 603 480 590',
            website: 'http://ukraineczka.pl/',
            email: 'restauracjaukraineczka@wp.pl',
            address_obj: {
              street1: 'ul. Panienska 19',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-535',
            },
            address: 'ul. Panienska 19, Szczecin 70-535 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 660,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1380,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '10654',
                name: 'European',
              },
              {
                key: '10742',
                name: 'Eastern European',
              },
              {
                key: '10770',
                name: 'Ukrainian',
              },
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
            ],
            dietary_restrictions: [
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
            ],
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '2697257',
            name: 'Browar Stara Komenda',
            latitude: '53.421616',
            longitude: '14.551004',
            num_reviews: '382',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/13/bd/80/bd/zeberka-w-sosie-miodowo.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/13/bd/80/bd/zeberka-w-sosie-miodowo.jpg',
                  height: '50',
                },
                original: {
                  width: '1280',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/13/bd/80/bd/zeberka-w-sosie-miodowo.jpg',
                  height: '854',
                },
                large: {
                  width: '1024',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-w/13/bd/80/bd/zeberka-w-sosie-miodowo.jpg',
                  height: '683',
                },
                medium: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/13/bd/80/bd/zeberka-w-sosie-miodowo.jpg',
                  height: '367',
                },
              },
              is_blessed: true,
              uploaded_date: '2018-07-17T17:38:36-0400',
              caption: 'Zeberka  w sosie miodowo-piwnym',
              id: '331186365',
              helpful_votes: '3',
              published_date: '2018-07-17T17:38:36-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '4.195601463317871',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '12',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#9 of 407 Restaurants in Szczecin',
            distance: '1.7803762794980345',
            distance_string: '1.8 km',
            bearing: 'southeast',
            rating: '4.0',
            is_closed: false,
            open_now_text: 'Closed Now',
            is_long_closed: false,
            price_level: '$$ - $$$',
            price: '$15 - $50',
            description:
              'Stara Komenda is the first restaurant brewery in Szczecin. There were more than several dozen of such types of restaurants in the Western Pomerania. As a small, family brewery we focus on what is natural and fresh. We combine the characteristics of a brewery, a restaurant and a pub. We continue the tradition and reconstruct brewing in our region.',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d2697257-Reviews-Browar_Stara_Komenda-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d2697257-Browar_Stara_Komenda-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'sit_down',
                name: 'Sit down',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 91 423 44 45',
            website: 'http://www.starakomenda.pl',
            address_obj: {
              street1: 'ul. plac Stefana Batorego 3',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-207',
            },
            address: 'ul. plac Stefana Batorego 3, Szczecin 70-207 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 780,
                    close_time: 1200,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1200,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1200,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1200,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1200,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1320,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '10637',
                name: 'Polish',
              },
              {
                key: '10640',
                name: 'Bar',
              },
              {
                key: '10654',
                name: 'European',
              },
              {
                key: '10670',
                name: 'Pub',
              },
              {
                key: '10742',
                name: 'Eastern European',
              },
              {
                key: '10746',
                name: 'Central European',
              },
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
            ],
            dietary_restrictions: [
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
            ],
            booking: {
              provider: 'Pyszne.pl',
              url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=184361560&geo=2697257&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2Q1iz95cowfodI2Ioji1gi8&cs=18e589c0cf6807fd7190f5ef6cbbede8b',
            },
            reserve_info: {
              id: '2697257',
              provider: 'Pyszne.pl',
              provider_img:
                'https://static.tacdn.com/img2/branding/hotels/pyszne.pl_white_05.30.2019.png',
              url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=184361560&geo=2697257&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2Q1iz95cowfodI2Ioji1gi8&cs=18e589c0cf6807fd7190f5ef6cbbede8b',
              booking_partner_id: null,
              racable: false,
              api_bookable: false,
              timeslots: null,
              bestoffer: null,
              timeslot_offers: null,
              button_text: 'Order Online',
              disclaimer_text: null,
              banner_text: null,
            },
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '3243954',
            name: 'Wyszak Family Brewery',
            latitude: '53.424316',
            longitude: '14.560155',
            num_reviews: '687',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/0f/ad/c2/dd/photo0jpg.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/0f/ad/c2/dd/photo0jpg.jpg',
                  height: '50',
                },
                original: {
                  width: '1600',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/0f/ad/c2/dd/photo0jpg.jpg',
                  height: '1200',
                },
                large: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/ad/c2/dd/photo0jpg.jpg',
                  height: '412',
                },
                medium: {
                  width: '250',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-f/0f/ad/c2/dd/photo0jpg.jpg',
                  height: '188',
                },
              },
              is_blessed: true,
              uploaded_date: '2017-06-25T13:01:00-0400',
              caption: '',
              id: '263045853',
              helpful_votes: '1',
              published_date: '2017-06-25T13:01:00-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '4.151042938232422',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '13',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#10 of 407 Restaurants in Szczecin',
            distance: '2.1701126471186183',
            distance_string: '2.2 km',
            bearing: 'east',
            rating: '4.0',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$$ - $$$',
            price: '$16 - $70',
            description:
              'The best beer in Poland 2016 ! Delicious regional cuisine, great atmosphere, unique gothic vaults. Visit us!',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d3243954-Reviews-Wyszak_Family_Brewery-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d3243954-Wyszak_Family_Brewery-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'sit_down',
                name: 'Sit down',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 662 233 678',
            website: 'http://browarwyszak.pl/',
            email: 'info@browarwyszak.pl',
            address_obj: {
              street1: 'Msciwoja II 8',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-533',
            },
            address: 'Msciwoja II 8, Szczecin 70-533 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1500,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1500,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '10637',
                name: 'Polish',
              },
              {
                key: '10640',
                name: 'Bar',
              },
              {
                key: '10654',
                name: 'European',
              },
              {
                key: '10742',
                name: 'Eastern European',
              },
              {
                key: '10746',
                name: 'Central European',
              },
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
            ],
            dietary_restrictions: [
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
            ],
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '274736',
            ad_position: 'inline2',
            ad_size: '8X8',
            doubleclick_zone: 'eu.poland',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            detail: '0',
            page_type: 'restaurants',
            mob_ptype: 'app_restaurants',
          },
          {
            location_id: '1911536',
            name: 'Karczma Pod Kogutem',
            latitude: '53.430534',
            longitude: '14.55139',
            num_reviews: '572',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/07/1b/7c/b2/pod-kogutem.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/07/1b/7c/b2/pod-kogutem.jpg',
                  height: '50',
                },
                original: {
                  width: '2000',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/07/1b/7c/b2/pod-kogutem.jpg',
                  height: '1500',
                },
                large: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/07/1b/7c/b2/pod-kogutem.jpg',
                  height: '413',
                },
                medium: {
                  width: '250',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-f/07/1b/7c/b2/pod-kogutem.jpg',
                  height: '188',
                },
              },
              is_blessed: true,
              uploaded_date: '2014-12-27T11:49:59-0500',
              caption: 'ogródek letni',
              id: '119241906',
              helpful_votes: '12',
              published_date: '2014-12-27T11:49:59-0500',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '4.148927211761475',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '14',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#11 of 407 Restaurants in Szczecin',
            distance: '1.4493293751981284',
            distance_string: '1.4 km',
            bearing: 'east',
            rating: '4.0',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$$ - $$$',
            price: '$18 - $67',
            description: '',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d1911536-Reviews-Karczma_Pod_Kogutem-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d1911536-Karczma_Pod_Kogutem-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'sit_down',
                name: 'Sit down',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 91 434 68 73',
            website: 'http://www.karczmapodkogutem.pl',
            email: 'podkogutem@karczmapodkogutem.pl',
            address_obj: {
              street1: 'ul. plac Lotnikow 3',
              street2: '',
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-414',
            },
            address: 'ul. plac Lotnikow 3, Szczecin 70-414 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 720,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1440,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '10637',
                name: 'Polish',
              },
              {
                key: '10654',
                name: 'European',
              },
              {
                key: '10742',
                name: 'Eastern European',
              },
              {
                key: '10746',
                name: 'Central European',
              },
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
            ],
            dietary_restrictions: [
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
            ],
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '8298068',
            name: 'Nowy Browar Szczecin',
            latitude: '53.424034',
            longitude: '14.549891',
            num_reviews: '627',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/08/2b/94/b8/pizza-dobra.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/08/2b/94/b8/pizza-dobra.jpg',
                  height: '50',
                },
                original: {
                  width: '1536',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/08/2b/94/b8/pizza-dobra.jpg',
                  height: '2048',
                },
                large: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-p/08/2b/94/b8/pizza-dobra.jpg',
                  height: '733',
                },
                medium: {
                  width: '338',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/08/2b/94/b8/pizza-dobra.jpg',
                  height: '450',
                },
              },
              is_blessed: true,
              uploaded_date: '2015-06-24T13:57:49-0400',
              caption: 'Pizza dobra ��',
              id: '137073848',
              helpful_votes: '1',
              published_date: '2015-06-25T02:42:02-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '4.116413593292236',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '15',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#12 of 407 Restaurants in Szczecin',
            distance: '1.56869149179268',
            distance_string: '1.6 km',
            bearing: 'southeast',
            rating: '4.0',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$$ - $$$',
            description: '',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d8298068-Reviews-Nowy_Browar_Szczecin-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d8298068-Nowy_Browar_Szczecin-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 91 433 54 84',
            website: 'http://www.nowybrowar.pl/',
            email: 'biuro@nowybrowar.pl',
            address_obj: {
              street1: 'ul. Partyzantow 2',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-222',
            },
            address: 'ul. Partyzantow 2, Szczecin 70-222 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 660,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 540,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 540,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 540,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 540,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 540,
                    close_time: 1560,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1560,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '10637',
                name: 'Polish',
              },
              {
                key: '10640',
                name: 'Bar',
              },
              {
                key: '10651',
                name: 'Barbecue',
              },
              {
                key: '10654',
                name: 'European',
              },
              {
                key: '10670',
                name: 'Pub',
              },
              {
                key: '10746',
                name: 'Central European',
              },
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
            ],
            dietary_restrictions: [
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
            ],
            establishment_types: [
              {
                key: '11776',
                name: 'Bars & Pubs',
              },
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '11860957',
            name: 'Bollywood Street Food',
            latitude: '53.42539',
            longitude: '14.561138',
            num_reviews: '227',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/0d/d0/e6/2d/bollywood-street-food.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/0d/d0/e6/2d/bollywood-street-food.jpg',
                  height: '50',
                },
                original: {
                  width: '1200',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/0d/d0/e6/2d/bollywood-street-food.jpg',
                  height: '800',
                },
                large: {
                  width: '1024',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-w/0d/d0/e6/2d/bollywood-street-food.jpg',
                  height: '683',
                },
                medium: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/d0/e6/2d/bollywood-street-food.jpg',
                  height: '367',
                },
              },
              is_blessed: true,
              uploaded_date: '2016-12-06T19:50:16-0500',
              caption: 'Bollywood Street Food',
              id: '231794221',
              helpful_votes: '3',
              published_date: '2016-12-06T19:50:16-0500',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '4.090694904327393',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '16',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#13 of 407 Restaurants in Szczecin',
            distance: '2.1927908171025408',
            distance_string: '2.2 km',
            bearing: 'east',
            rating: '4.5',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$$ - $$$',
            price: '$20 - $70',
            description:
              'I am quite passionate about eating authentic foods no matter where I am. But my all time favorite and most indulgent satisfying remains the street foods of India. My career in Bollywood took me to various locations which made me understand the palate of street food in a very rustic authentic way using correct ingredients and spices.',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d11860957-Reviews-Bollywood_Street_Food-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d11860957-Bollywood_Street_Food-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'cafe',
                name: 'Café',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 91 433 30 33',
            website: 'http://www.bollywood.com.pl/pl',
            email: 'bollywood@bollywood.com.pl',
            address_obj: {
              street1: 'Panienska 20',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-535',
            },
            address: 'Panienska 20, Szczecin 70-535 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '10346',
                name: 'Indian',
              },
              {
                key: '10659',
                name: 'Asian',
              },
              {
                key: '10686',
                name: 'Street Food',
              },
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
              {
                key: '10992',
                name: 'Gluten Free Options',
              },
            ],
            dietary_restrictions: [
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
              {
                key: '10992',
                name: 'Gluten Free Options',
              },
            ],
            booking: {
              provider: 'Pyszne.pl',
              url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=202953182&geo=11860957&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2R113c2uXtArgkncTtRfC4A&cs=181b137a011f9065db689ce14311f406f',
            },
            reserve_info: {
              id: '11860957',
              provider: 'Pyszne.pl',
              provider_img:
                'https://static.tacdn.com/img2/branding/hotels/pyszne.pl_white_05.30.2019.png',
              url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=202953182&geo=11860957&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2R113c2uXtArgkncTtRfC4A&cs=181b137a011f9065db689ce14311f406f',
              booking_partner_id: null,
              racable: false,
              api_bookable: false,
              timeslots: null,
              bestoffer: null,
              timeslot_offers: null,
              button_text: 'Order Online',
              disclaimer_text: null,
              banner_text: null,
            },
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '3669414',
            name: 'Buddha Thai & Fusion Restaurant',
            latitude: '53.424053',
            longitude: '14.559456',
            num_reviews: '820',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/05/1f/db/d6/buddha-thai-fusion-restaurant.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/05/1f/db/d6/buddha-thai-fusion-restaurant.jpg',
                  height: '50',
                },
                original: {
                  width: '769',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/05/1f/db/d6/buddha-thai-fusion-restaurant.jpg',
                  height: '480',
                },
                large: {
                  width: '769',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/05/1f/db/d6/buddha-thai-fusion-restaurant.jpg',
                  height: '480',
                },
                medium: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/05/1f/db/d6/buddha-thai-fusion-restaurant.jpg',
                  height: '343',
                },
              },
              is_blessed: true,
              uploaded_date: '2013-12-10T06:34:10-0500',
              caption: 'Buddha Restaurant',
              id: '85973974',
              helpful_votes: '6',
              published_date: '2013-12-10T06:34:10-0500',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '4.087072849273682',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '17',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#14 of 407 Restaurants in Szczecin',
            distance: '2.137644017362188',
            distance_string: '2.1 km',
            bearing: 'east',
            rating: '4.0',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$$ - $$$',
            price: '$10 - $58',
            description: '',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d3669414-Reviews-Buddha_Thai_Fusion_Restaurant-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d3669414-Buddha_Thai_Fusion_Restaurant-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'sit_down',
                name: 'Sit down',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 91 433 40 33',
            website: 'http://www.buddharestaurant.pl/index2.html',
            email: 'buddha@buddharestaurant.pl',
            address_obj: {
              street1: 'ul. Rynek Sienny 2',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-542',
            },
            address: 'ul. Rynek Sienny 2, Szczecin 70-542 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '10659',
                name: 'Asian',
              },
              {
                key: '10660',
                name: 'Thai',
              },
              {
                key: '10671',
                name: 'Fusion',
              },
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
              {
                key: '10992',
                name: 'Gluten Free Options',
              },
            ],
            dietary_restrictions: [
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
              {
                key: '10992',
                name: 'Gluten Free Options',
              },
            ],
            booking: {
              provider: 'Pyszne.pl',
              url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=202960032&geo=3669414&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2YDPYKKtxeDCSfHGydXye5Q&cs=17dff15db1d8aedbade5c46b39c1af002',
            },
            reserve_info: {
              id: '3669414',
              provider: 'Pyszne.pl',
              provider_img:
                'https://static.tacdn.com/img2/branding/hotels/pyszne.pl_white_05.30.2019.png',
              url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=202960032&geo=3669414&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2YDPYKKtxeDCSfHGydXye5Q&cs=17dff15db1d8aedbade5c46b39c1af002',
              booking_partner_id: null,
              racable: false,
              api_bookable: false,
              timeslots: null,
              bestoffer: null,
              timeslot_offers: null,
              button_text: 'Order Online',
              disclaimer_text: null,
              banner_text: null,
            },
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '13115486',
            name: 'Ole! Bistro & Tapas',
            latitude: '53.423985',
            longitude: '14.5651',
            num_reviews: '127',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/11/3b/a9/ba/ole-bistro-tapas.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/11/3b/a9/ba/ole-bistro-tapas.jpg',
                  height: '50',
                },
                original: {
                  width: '1334',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/11/3b/a9/ba/ole-bistro-tapas.jpg',
                  height: '1000',
                },
                large: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/11/3b/a9/ba/ole-bistro-tapas.jpg',
                  height: '412',
                },
                medium: {
                  width: '250',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-f/11/3b/a9/ba/ole-bistro-tapas.jpg',
                  height: '187',
                },
              },
              is_blessed: true,
              uploaded_date: '2017-11-10T07:05:50-0500',
              caption: 'Ole! Bistro & Tapas',
              id: '289122746',
              helpful_votes: '1',
              published_date: '2017-11-10T07:05:50-0500',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '4.012493133544922',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '18',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#15 of 407 Restaurants in Szczecin',
            distance: '2.4911079833398206',
            distance_string: '2.5 km',
            bearing: 'east',
            rating: '4.5',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$$ - $$$',
            price: '$8 - $85',
            description:
              'Spanish and European cousin in the heart of the city on the Bulwar Gdyński next to the Odra river with the most stunning view on panorama of Szczecin. Tapas bar. Authentic Spanish products, jamon, cheese, olives, wine, full bar. Main courses and deserts. We cater for parties.',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d13115486-Reviews-Ole_Bistro_Tapas-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d13115486-Ole_Bistro_Tapas-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'sit_down',
                name: 'Sit down',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 91 852 42 42',
            website: 'http://olebistro.pl',
            address_obj: {
              street1: 'Bulwar Gdynski 2',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-653',
            },
            address: 'Bulwar Gdynski 2, Szczecin 70-653 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 720,
                    close_time: 1260,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1350,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1350,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1350,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1350,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '10654',
                name: 'European',
              },
              {
                key: '10655',
                name: 'Spanish',
              },
              {
                key: '10640',
                name: 'Bar',
              },
              {
                key: '10649',
                name: 'Mediterranean',
              },
              {
                key: '10670',
                name: 'Pub',
              },
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
            ],
            dietary_restrictions: [
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
            ],
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '2372918',
            name: 'Trattoria Toscana',
            latitude: '53.426113',
            longitude: '14.554995',
            num_reviews: '599',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/0a/b7/d4/c9/trattoria.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/0a/b7/d4/c9/trattoria.jpg',
                  height: '50',
                },
                original: {
                  width: '900',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/0a/b7/d4/c9/trattoria.jpg',
                  height: '701',
                },
                large: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/b7/d4/c9/trattoria.jpg',
                  height: '428',
                },
                medium: {
                  width: '250',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-f/0a/b7/d4/c9/trattoria.jpg',
                  height: '195',
                },
              },
              is_blessed: true,
              uploaded_date: '2016-03-27T09:08:44-0400',
              caption: 'Trattoria',
              id: '179819721',
              helpful_votes: '2',
              published_date: '2016-03-27T09:08:44-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '3.9865379333496094',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '19',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#16 of 407 Restaurants in Szczecin',
            distance: '1.7803596471021552',
            distance_string: '1.8 km',
            bearing: 'east',
            rating: '4.0',
            is_closed: false,
            open_now_text: 'Closes in 25 min',
            is_long_closed: false,
            price_level: '$$ - $$$',
            description: 'Amazing place :)',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d2372918-Reviews-Trattoria_Toscana-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d2372918-Trattoria_Toscana-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'sit_down',
                name: 'Sit down',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 91 431 02 72',
            website: 'http://www.trattoria-toscana.pl/',
            address_obj: {
              street1: 'ul. plac Orla Bialego 10',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-562',
            },
            address: 'ul. plac Orla Bialego 10, Szczecin 70-562 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 720,
                    close_time: 1260,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1260,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1260,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1260,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1260,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1260,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1260,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '4617',
                name: 'Italian',
              },
              {
                key: '10641',
                name: 'Pizza',
              },
              {
                key: '10649',
                name: 'Mediterranean',
              },
              {
                key: '10654',
                name: 'European',
              },
              {
                key: '20066',
                name: 'Tuscan',
              },
              {
                key: '20075',
                name: 'Central-Italian',
              },
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
              {
                key: '10992',
                name: 'Gluten Free Options',
              },
            ],
            dietary_restrictions: [
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
              {
                key: '10992',
                name: 'Gluten Free Options',
              },
            ],
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '274736',
            ad_position: 'inline3',
            ad_size: '8X8',
            doubleclick_zone: 'eu.poland',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            detail: '0',
            page_type: 'restaurants',
            mob_ptype: 'app_restaurants',
          },
          {
            location_id: '751445',
            name: 'Steakhouse Colorado',
            latitude: '53.431362',
            longitude: '14.567396',
            num_reviews: '405',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/12/e6/53/fb/img-20180506-114910-largejpg.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/12/e6/53/fb/img-20180506-114910-largejpg.jpg',
                  height: '50',
                },
                original: {
                  width: '992',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/12/e6/53/fb/img-20180506-114910-largejpg.jpg',
                  height: '744',
                },
                large: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/12/e6/53/fb/img-20180506-114910-largejpg.jpg',
                  height: '413',
                },
                medium: {
                  width: '250',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-f/12/e6/53/fb/img-20180506-114910-largejpg.jpg',
                  height: '188',
                },
              },
              is_blessed: false,
              uploaded_date: '2018-05-09T17:07:06-0400',
              caption: '',
              id: '317084667',
              helpful_votes: '5',
              published_date: '2018-05-09T17:07:06-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '3.939413547515869',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '21',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#17 of 407 Restaurants in Szczecin',
            distance: '2.508554608554692',
            distance_string: '2.5 km',
            bearing: 'east',
            rating: '4.0',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$$ - $$$',
            description:
              "The Colorado Steakhouse - is the synonym of best steaks since 2001, served - in addition - with the best view of the river, Lasztownia and Old Town. A wooden pavilion, and inside - a real Wild Wild West at its culinary best. Only here: roasted ribs, spicy wings, Mexican Fajitas and genuine American burgers, served with the special house sauce, Jack Daniel's BBQ. All that is offered with the accompaniment of great music and fantastic customer service, on two levels separated by a cowboy stagecoach turned into a bar serving excellent drinks - and with a stone fireplace as the backdrop.",
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d751445-Reviews-Steakhouse_Colorado-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d751445-Steakhouse_Colorado-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'sit_down',
                name: 'Sit down',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 91 488 19 21',
            website: 'http://walychrobrego.com/colorado/',
            email: 'colorado@walychrobrego.com',
            address_obj: {
              street1: 'ul. Waly Chrobrego 5',
              street2: '70-500',
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-500',
            },
            address: 'ul. Waly Chrobrego 5 70-500, Szczecin 70-500 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 600,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 540,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 540,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 540,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 540,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 540,
                    close_time: 1500,
                  },
                ],
                [
                  {
                    open_time: 600,
                    close_time: 1500,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '9908',
                name: 'American',
              },
              {
                key: '10345',
                name: 'Steakhouse',
              },
              {
                key: '10654',
                name: 'European',
              },
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10992',
                name: 'Gluten Free Options',
              },
            ],
            dietary_restrictions: [
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10992',
                name: 'Gluten Free Options',
              },
            ],
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '7093086',
            name: 'Kuchnia Kraftowa',
            latitude: '53.427944',
            longitude: '14.553496',
            num_reviews: '127',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/14/55/d5/6d/tkacka-kuchnia-kraftowa.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/14/55/d5/6d/tkacka-kuchnia-kraftowa.jpg',
                  height: '50',
                },
                original: {
                  width: '1133',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/14/55/d5/6d/tkacka-kuchnia-kraftowa.jpg',
                  height: '1133',
                },
                large: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-p/14/55/d5/6d/tkacka-kuchnia-kraftowa.jpg',
                  height: '550',
                },
                medium: {
                  width: '450',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/14/55/d5/6d/tkacka-kuchnia-kraftowa.jpg',
                  height: '450',
                },
              },
              is_blessed: true,
              uploaded_date: '2018-08-27T04:04:45-0400',
              caption: 'Tkacka Kuchnia Kraftowa',
              id: '341169517',
              helpful_votes: '0',
              published_date: '2018-08-27T04:04:45-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '3.8798584938049316',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '23',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#18 of 407 Restaurants in Szczecin',
            distance: '1.6288541790772881',
            distance_string: '1.6 km',
            bearing: 'east',
            rating: '4.5',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$$ - $$$',
            price: '$5 - $42',
            description:
              'Kraft kitchen Pizza other than all, unobvious dishes created without compromise, speciality coffee, kraft beers and Italian wines .. ♥ A new restaurant in the center of Szczecin, We use only real products, we order meat from Italy, Feta arrives from Greece ... Everything we serve has been prepared from scratch. From pizza dough to mayonnaise in garlic sauce! The only spices are cinnamon sticks, anise stars, cloves, salt, sugar and pepper. The restaurant is located in a narrow street to the right of the Tourist Information Center at Kaskada, in front of the Love All Togheter Club and the Radecki Restaurant;)',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d7093086-Reviews-Kuchnia_Kraftowa-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d7093086-Kuchnia_Kraftowa-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'sit_down',
                name: 'Sit down',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 91 433 73 37',
            website: 'http://www.tkacka2.pl',
            email: 'tkacka.szczecin@gmail.com',
            address_obj: {
              street1: 'Tkacka 2A',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-561',
            },
            address: 'Tkacka 2A, Szczecin 70-561 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 660,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1320,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '4617',
                name: 'Italian',
              },
              {
                key: '10641',
                name: 'Pizza',
              },
              {
                key: '10654',
                name: 'European',
              },
              {
                key: '10648',
                name: 'International',
              },
              {
                key: '10669',
                name: 'Contemporary',
              },
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
            ],
            dietary_restrictions: [
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
            ],
            booking: {
              provider: 'Pyszne.pl',
              url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=235840483&geo=7093086&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2ReT_j0Y4jQZM3sH-DFQewk&cs=11193c1abc08bd86b2afdabe94576da09',
            },
            reserve_info: {
              id: '7093086',
              provider: 'Pyszne.pl',
              provider_img:
                'https://static.tacdn.com/img2/branding/hotels/pyszne.pl_white_05.30.2019.png',
              url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=235840483&geo=7093086&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2ReT_j0Y4jQZM3sH-DFQewk&cs=11193c1abc08bd86b2afdabe94576da09',
              booking_partner_id: null,
              racable: false,
              api_bookable: false,
              timeslots: null,
              bestoffer: null,
              timeslot_offers: null,
              button_text: 'Order Online',
              disclaimer_text: null,
              banner_text: null,
            },
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '751442',
            name: 'Christopher Columbus Restaurant',
            latitude: '53.428127',
            longitude: '14.564334',
            num_reviews: '593',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/07/bf/1d/06/christopher-columbus.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/07/bf/1d/06/christopher-columbus.jpg',
                  height: '50',
                },
                original: {
                  width: '1600',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/07/bf/1d/06/christopher-columbus.jpg',
                  height: '1000',
                },
                large: {
                  width: '1024',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-w/07/bf/1d/06/christopher-columbus.jpg',
                  height: '640',
                },
                medium: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/07/bf/1d/06/christopher-columbus.jpg',
                  height: '343',
                },
              },
              is_blessed: true,
              uploaded_date: '2015-04-23T07:14:25-0400',
              caption: 'PIECZONA KACZKA Z KLUSKAMI I MODRĄ KAPUSTĄ',
              id: '129965318',
              helpful_votes: '2',
              published_date: '2015-04-23T07:14:25-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '3.7819571495056152',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '24',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#19 of 407 Restaurants in Szczecin',
            distance: '2.3315022903176748',
            distance_string: '2.3 km',
            bearing: 'east',
            rating: '4.0',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$$ - $$$',
            description:
              'Christopher Columbus Restaurant stands on the south panoramic terrace of the Chrobry Embankment (Waly Chrobrego). It opened its doors on May 1, 2000, and is made entirely of wood. On the available two floors and in the summer garden, the Restaurant can accommodate about 360 people, and is known to be one of the best dining options in Poland in its market segment. The original interior design, displaying one of the largest collections of marine works in Szczecin, creates a unique atmosphere. The extensive, varied menu and professionalism of the staff attract numerous guests every day - and the restaurant team do their best to meet the guests\' expectations, creating an exceptional, welcoming atmosphere, full of joy of life and truly bringing out the best flavours of the dishes. The restaurant Patron - Christopher Columbus - keeps watch over the guests, who are comfortably wrapped in the warmth of the fireplace, styled to resemble the shape of the stern of the original 15th century sailing ship "Santa Maria".',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d751442-Reviews-Christopher_Columbus_Restaurant-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d751442-Christopher_Columbus_Restaurant-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'sit_down',
                name: 'Sit down',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 91 489 34 01',
            website: 'http://walychrobrego.com/columbus/',
            email: 'columbus@walychrobrego.com',
            address_obj: {
              street1: 'ul. Waly Chrobrego 6',
              street2: '',
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-500',
            },
            address: 'ul. Waly Chrobrego 6, Szczecin 70-500 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 600,
                    close_time: 1500,
                  },
                ],
                [
                  {
                    open_time: 600,
                    close_time: 1500,
                  },
                ],
                [
                  {
                    open_time: 600,
                    close_time: 1500,
                  },
                ],
                [
                  {
                    open_time: 600,
                    close_time: 1500,
                  },
                ],
                [
                  {
                    open_time: 600,
                    close_time: 1500,
                  },
                ],
                [
                  {
                    open_time: 600,
                    close_time: 1560,
                  },
                ],
                [
                  {
                    open_time: 600,
                    close_time: 1560,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '10654',
                name: 'European',
              },
              {
                key: '10746',
                name: 'Central European',
              },
              {
                key: '10637',
                name: 'Polish',
              },
              {
                key: '10648',
                name: 'International',
              },
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
            ],
            dietary_restrictions: [
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
            ],
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '12419500',
            name: 'Spotkanie',
            latitude: '53.43141',
            longitude: '14.549468',
            num_reviews: '67',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/0f/58/a4/72/img-20170521-wa0006-largejpg.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/0f/58/a4/72/img-20170521-wa0006-largejpg.jpg',
                  height: '50',
                },
                original: {
                  width: '1200',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/0f/58/a4/72/img-20170521-wa0006-largejpg.jpg',
                  height: '1600',
                },
                large: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-p/0f/58/a4/72/img-20170521-wa0006-largejpg.jpg',
                  height: '733',
                },
                medium: {
                  width: '338',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/58/a4/72/img-20170521-wa0006-largejpg.jpg',
                  height: '450',
                },
              },
              is_blessed: true,
              uploaded_date: '2017-05-22T08:15:53-0400',
              caption: '',
              id: '257467506',
              helpful_votes: '0',
              published_date: '2017-05-22T08:15:53-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '3.777367353439331',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '25',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#20 of 407 Restaurants in Szczecin',
            distance: '1.3198727026338097',
            distance_string: '1.3 km',
            bearing: 'east',
            rating: '4.5',
            is_closed: false,
            open_now_text: 'Closes in 25 min',
            is_long_closed: false,
            price_level: '$$ - $$$',
            description: '',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d12419500-Reviews-Spotkanie-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d12419500-Spotkanie-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 881 391 969',
            website: 'http://www.facebook.com/spotkanie.szczecin/',
            email: 'rachwalskiipartnerzy@gmail.com',
            address_obj: {
              street1: 'Aleja Jana Pawla II 45 / U1',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-415',
            },
            address: 'Aleja Jana Pawla II 45 / U1, Szczecin 70-415 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 600,
                    close_time: 1200,
                  },
                ],
                [
                  {
                    open_time: 540,
                    close_time: 1260,
                  },
                ],
                [
                  {
                    open_time: 540,
                    close_time: 1260,
                  },
                ],
                [
                  {
                    open_time: 540,
                    close_time: 1260,
                  },
                ],
                [
                  {
                    open_time: 540,
                    close_time: 1260,
                  },
                ],
                [
                  {
                    open_time: 540,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 540,
                    close_time: 1380,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '10642',
                name: 'Cafe',
              },
              {
                key: '10654',
                name: 'European',
              },
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
            ],
            dietary_restrictions: [
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
            ],
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '17468708',
            name: 'Baraz Restauracja',
            latitude: '53.424652',
            longitude: '14.560281',
            num_reviews: '54',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/17/a2/c8/3a/beza-marzenie-doroty.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/17/a2/c8/3a/beza-marzenie-doroty.jpg',
                  height: '50',
                },
                original: {
                  width: '1200',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/17/a2/c8/3a/beza-marzenie-doroty.jpg',
                  height: '900',
                },
                large: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/17/a2/c8/3a/beza-marzenie-doroty.jpg',
                  height: '413',
                },
                medium: {
                  width: '250',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-f/17/a2/c8/3a/beza-marzenie-doroty.jpg',
                  height: '188',
                },
              },
              is_blessed: true,
              uploaded_date: '2019-05-23T07:28:18-0400',
              caption: 'Beza / Homemade meringue',
              id: '396544058',
              helpful_votes: '0',
              published_date: '2019-05-23T07:28:18-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '3.6922919750213623',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '27',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#21 of 407 Restaurants in Szczecin',
            distance: '2.164966346970265',
            distance_string: '2.2 km',
            bearing: 'east',
            rating: '4.5',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$',
            price: '$19 - $80',
            description:
              'Baraż Restauracja is a place where you can feel comfortable. We have open kitchen that you can see us while we are prepering meal for you. Our menu is made from fresh and healthy products. Visit us and try! You will not regret :)',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d17468708-Reviews-Baraz_Restauracja-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d17468708-Baraz_Restauracja-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'sit_down',
                name: 'Sit down',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 731 600 955',
            website: 'http://www.barazrestauracja.pl/',
            email: 'barazrestauracja@gmail.com',
            address_obj: {
              street1: 'Kurkowa 4/2',
              street2:
                'Intersection of Panieńska, Kurkowa and Księcia Mściwoja II Streets',
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-535',
            },
            address:
              'Kurkowa 4/2 Intersection of Panieńska, Kurkowa and Księcia Mściwoja II Streets, Szczecin 70-535 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '10637',
                name: 'Polish',
              },
              {
                key: '10654',
                name: 'European',
              },
              {
                key: '10679',
                name: 'Healthy',
              },
            ],
            dietary_restrictions: [],
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '13200525',
            name: 'Shanghai Chinese Restaurant',
            latitude: '53.423897',
            longitude: '14.559493',
            num_reviews: '150',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/11/77/15/9e/chefs-with-cooks.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/11/77/15/9e/chefs-with-cooks.jpg',
                  height: '50',
                },
                original: {
                  width: '2000',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/11/77/15/9e/chefs-with-cooks.jpg',
                  height: '1277',
                },
                large: {
                  width: '1024',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-w/11/77/15/9e/chefs-with-cooks.jpg',
                  height: '653',
                },
                medium: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/11/77/15/9e/chefs-with-cooks.jpg',
                  height: '351',
                },
              },
              is_blessed: true,
              uploaded_date: '2017-12-07T19:25:41-0500',
              caption: 'Chefs with cooks ',
              id: '293016990',
              helpful_votes: '3',
              published_date: '2017-12-07T19:25:41-0500',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '3.6753244400024414',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '28',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#22 of 407 Restaurants in Szczecin',
            distance: '2.14650523512568',
            distance_string: '2.1 km',
            bearing: 'east',
            rating: '4.5',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$$ - $$$',
            price: '$6 - $68',
            description: '',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d13200525-Reviews-Shanghai_Chinese_Restaurant-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d13200525-Shanghai_Chinese_Restaurant-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'sit_down',
                name: 'Sit down',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 91 433 10 33',
            website: 'http://www.shanghairestaurant.pl/pl',
            email: 'shanghai@shanghairestaurant.pl',
            address_obj: {
              street1: 'Rynek Sienny 4',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-542',
            },
            address: 'Rynek Sienny 4, Szczecin 70-542 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '5379',
                name: 'Chinese',
              },
              {
                key: '10659',
                name: 'Asian',
              },
              {
                key: '10671',
                name: 'Fusion',
              },
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
            ],
            dietary_restrictions: [
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
              {
                key: '10697',
                name: 'Vegan Options',
              },
            ],
            booking: {
              provider: 'Pyszne.pl',
              url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=202953096&geo=13200525&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2SkDf697o4g8ZGU1JwMxP1k&cs=17f8e7a713ef3f7dbdcf8e27083254429',
            },
            reserve_info: {
              id: '13200525',
              provider: 'Pyszne.pl',
              provider_img:
                'https://static.tacdn.com/img2/branding/hotels/pyszne.pl_white_05.30.2019.png',
              url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=202953096&geo=13200525&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2SkDf697o4g8ZGU1JwMxP1k&cs=17f8e7a713ef3f7dbdcf8e27083254429',
              booking_partner_id: null,
              racable: false,
              api_bookable: false,
              timeslots: null,
              bestoffer: null,
              timeslot_offers: null,
              button_text: 'Order Online',
              disclaimer_text: null,
              banner_text: null,
            },
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '12698875',
            name: 'Alternatywnie',
            latitude: '53.429913',
            longitude: '14.542778',
            num_reviews: '40',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/18/55/1e/08/outside-look.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/18/55/1e/08/outside-look.jpg',
                  height: '50',
                },
                original: {
                  width: '1280',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/18/55/1e/08/outside-look.jpg',
                  height: '854',
                },
                large: {
                  width: '1024',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-w/18/55/1e/08/outside-look.jpg',
                  height: '684',
                },
                medium: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/18/55/1e/08/outside-look.jpg',
                  height: '367',
                },
              },
              is_blessed: true,
              uploaded_date: '2019-07-15T17:12:33-0400',
              caption: 'Outside look',
              id: '408231432',
              helpful_votes: '1',
              published_date: '2019-07-15T17:12:33-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '3.6735761165618896',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '29',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#23 of 407 Restaurants in Szczecin',
            distance: '0.8885941948664586',
            distance_string: '0.9 km',
            bearing: 'east',
            rating: '5.0',
            is_closed: false,
            open_now_text: 'Closed Now',
            is_long_closed: false,
            price_level: '$',
            description: '',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d12698875-Reviews-Alternatywnie-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d12698875-Alternatywnie-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 881 678 585',
            website: 'http://www.altcoffee.pl',
            email: 'kontakt@altcoffee.pl',
            address_obj: {
              street1: 'Wojska Polskiego 35/U3',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-473',
            },
            address: 'Wojska Polskiego 35/U3, Szczecin 70-473 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 600,
                    close_time: 1140,
                  },
                ],
                [
                  {
                    open_time: 480,
                    close_time: 1200,
                  },
                ],
                [
                  {
                    open_time: 480,
                    close_time: 1200,
                  },
                ],
                [
                  {
                    open_time: 480,
                    close_time: 1200,
                  },
                ],
                [
                  {
                    open_time: 480,
                    close_time: 1200,
                  },
                ],
                [
                  {
                    open_time: 480,
                    close_time: 1200,
                  },
                ],
                [
                  {
                    open_time: 540,
                    close_time: 1200,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '10642',
                name: 'Cafe',
              },
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
            ],
            dietary_restrictions: [
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
            ],
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '18846096',
            name: 'Podgrzany Talerz',
            latitude: '53.42662',
            longitude: '14.552005',
            num_reviews: '54',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/19/cd/e9/12/podgrzany-talerz.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/19/cd/e9/12/podgrzany-talerz.jpg',
                  height: '50',
                },
                original: {
                  width: '1280',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/19/cd/e9/12/podgrzany-talerz.jpg',
                  height: '960',
                },
                large: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/19/cd/e9/12/podgrzany-talerz.jpg',
                  height: '412',
                },
                medium: {
                  width: '250',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-f/19/cd/e9/12/podgrzany-talerz.jpg',
                  height: '188',
                },
              },
              is_blessed: true,
              uploaded_date: '2019-10-24T19:26:12-0400',
              caption: 'Podgrzany talerz',
              id: '432924946',
              helpful_votes: '0',
              published_date: '2019-10-24T19:26:12-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '3.6673576831817627',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '30',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#24 of 407 Restaurants in Szczecin',
            distance: '1.5744893254476433',
            distance_string: '1.6 km',
            bearing: 'east',
            rating: '4.5',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$$ - $$$',
            description: '',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d18846096-Reviews-Podgrzany_Talerz-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d18846096-Podgrzany_Talerz-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 609 859 876',
            website: 'http://www.facebook.com/podgrzanytalerz1/',
            address_obj: {
              street1: 'aleja NiepodlegloSci 22',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '71-899',
            },
            address: 'aleja NiepodlegloSci 22, Szczecin 71-899 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 720,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1320,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [],
            dietary_restrictions: [],
            booking: {
              provider: 'Pyszne.pl',
              url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=235129345&geo=18846096&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2UI5UNAyXBijjWZP0YLosdY&cs=123039e0f4c69fb1ae3c86f0f33148799',
            },
            reserve_info: {
              id: '18846096',
              provider: 'Pyszne.pl',
              provider_img:
                'https://static.tacdn.com/img2/branding/hotels/pyszne.pl_white_05.30.2019.png',
              url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=235129345&geo=18846096&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2UI5UNAyXBijjWZP0YLosdY&cs=123039e0f4c69fb1ae3c86f0f33148799',
              booking_partner_id: null,
              racable: false,
              api_bookable: false,
              timeslots: null,
              bestoffer: null,
              timeslot_offers: null,
              button_text: 'Order Online',
              disclaimer_text: null,
              banner_text: null,
            },
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '10394488',
            name: 'Pecorino Pizza & Pasta',
            latitude: '53.4316',
            longitude: '14.539167',
            num_reviews: '75',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/0b/8a/2e/0d/zapraszamy-na-obiad-przy.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/0b/8a/2e/0d/zapraszamy-na-obiad-przy.jpg',
                  height: '50',
                },
                original: {
                  width: '2000',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/0b/8a/2e/0d/zapraszamy-na-obiad-przy.jpg',
                  height: '1333',
                },
                large: {
                  width: '1024',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-w/0b/8a/2e/0d/zapraszamy-na-obiad-przy.jpg',
                  height: '682',
                },
                medium: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/8a/2e/0d/zapraszamy-na-obiad-przy.jpg',
                  height: '367',
                },
              },
              is_blessed: true,
              uploaded_date: '2016-06-07T14:47:07-0400',
              caption: 'Zapraszamy na obiad przy lampce dobrego wina!',
              id: '193605133',
              helpful_votes: '1',
              published_date: '2016-06-07T14:47:07-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '3.627201557159424',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '31',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#25 of 407 Restaurants in Szczecin',
            distance: '0.6379474483764653',
            distance_string: '0.6 km',
            bearing: 'east',
            rating: '4.5',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$$ - $$$',
            description: '',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d10394488-Reviews-Pecorino_Pizza_Pasta-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d10394488-Pecorino_Pizza_Pasta-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 91 434 78 63',
            website: 'http://www.pizzapecorino.pl',
            email: 'biuro@pizzapecorino.pl',
            address_obj: {
              street1: 'Jagiellonska 80/10',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-362',
            },
            address: 'Jagiellonska 80/10, Szczecin 70-362 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 720,
                    close_time: 2040,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 2040,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 2040,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 2040,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 2040,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 2040,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 2040,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '4617',
                name: 'Italian',
              },
              {
                key: '10641',
                name: 'Pizza',
              },
            ],
            dietary_restrictions: [],
            booking: {
              provider: 'Pyszne.pl',
              url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=236825952&geo=10394488&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2U0Ie2l6Klljf6w44OkRDdc&cs=13e2d1de09503eab0265d77c23eadb4e8',
            },
            reserve_info: {
              id: '10394488',
              provider: 'Pyszne.pl',
              provider_img:
                'https://static.tacdn.com/img2/branding/hotels/pyszne.pl_white_05.30.2019.png',
              url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=236825952&geo=10394488&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2U0Ie2l6Klljf6w44OkRDdc&cs=13e2d1de09503eab0265d77c23eadb4e8',
              booking_partner_id: null,
              racable: false,
              api_bookable: false,
              timeslots: null,
              bestoffer: null,
              timeslot_offers: null,
              button_text: 'Order Online',
              disclaimer_text: null,
              banner_text: null,
            },
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '21279653',
            name: 'Tkacka 7 - Restaurant & Bar',
            latitude: '53.427597',
            longitude: '14.553254',
            num_reviews: '36',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/1c/10/ab/7a/logo.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/1c/10/ab/7a/logo.jpg',
                  height: '50',
                },
                original: {
                  width: '1280',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/10/ab/7a/logo.jpg',
                  height: '902',
                },
                large: {
                  width: '1024',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-w/1c/10/ab/7a/logo.jpg',
                  height: '722',
                },
                medium: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/10/ab/7a/logo.jpg',
                  height: '388',
                },
              },
              is_blessed: true,
              uploaded_date: '2020-09-24T09:21:38-0400',
              caption: 'Logo',
              id: '470854522',
              helpful_votes: '0',
              published_date: '2020-09-24T09:21:38-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '3.6237893104553223',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '32',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#26 of 407 Restaurants in Szczecin',
            distance: '1.622446711546348',
            distance_string: '1.6 km',
            bearing: 'east',
            rating: '5.0',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$$ - $$$',
            price: '$17 - $89',
            description:
              'A unique place that combines the energy of central Szczecin with a great selection of music and art in a spacious and beautifully lit modern interior. The delightfully innovative cuisine is based on fresh, local produce and can be enjoyed with a range of regional wine and beer or one of the exquisite house cocktails. Perfect for a business lunch, friends’ gathering, romantic date.',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d21279653-Reviews-Tkacka_7_Restaurant_Bar-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d21279653-Tkacka_7_Restaurant_Bar-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'sit_down',
                name: 'Sit down',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 502 542 397',
            website: 'http://www.tkacka7.pl',
            email: 'restauracja@tkacka7.pl',
            address_obj: {
              street1: 'Tkacka 7',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-556',
            },
            address: 'Tkacka 7, Szczecin 70-556 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 780,
                    close_time: 1260,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '10648',
                name: 'International',
              },
              {
                key: '10654',
                name: 'European',
              },
              {
                key: '10670',
                name: 'Pub',
              },
              {
                key: '10683',
                name: 'Gastropub',
              },
            ],
            dietary_restrictions: [],
            booking: {
              provider: 'Pyszne.pl',
              url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=202658089&geo=21279653&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2dT6LXIZaI8qSluigcQ1psw&cs=159c192be02b97afe3b8ee18dd4190993',
            },
            reserve_info: {
              id: '21279653',
              provider: 'Pyszne.pl',
              provider_img:
                'https://static.tacdn.com/img2/branding/hotels/pyszne.pl_white_05.30.2019.png',
              url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=202658089&geo=21279653&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2dT6LXIZaI8qSluigcQ1psw&cs=159c192be02b97afe3b8ee18dd4190993',
              booking_partner_id: null,
              racable: false,
              api_bookable: false,
              timeslots: null,
              bestoffer: null,
              timeslot_offers: null,
              button_text: 'Order Online',
              disclaimer_text: null,
              banner_text: null,
            },
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '3225683',
            name: 'Na Kuncu Korytarza Restaurant',
            latitude: '53.42613',
            longitude: '14.559737',
            num_reviews: '125',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/0b/e7/57/4b/20160709-142439-largejpg.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/0b/e7/57/4b/20160709-142439-largejpg.jpg',
                  height: '50',
                },
                original: {
                  width: '648',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/0b/e7/57/4b/20160709-142439-largejpg.jpg',
                  height: '1152',
                },
                large: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-p/0b/e7/57/4b/20160709-142439-largejpg.jpg',
                  height: '977',
                },
                medium: {
                  width: '253',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/e7/57/4b/20160709-142439-largejpg.jpg',
                  height: '450',
                },
              },
              is_blessed: true,
              uploaded_date: '2016-07-09T09:00:28-0400',
              caption: '',
              id: '199710539',
              helpful_votes: '0',
              published_date: '2016-07-09T09:00:28-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '3.583399534225464',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '33',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#27 of 407 Restaurants in Szczecin',
            distance: '2.0802184799987002',
            distance_string: '2.1 km',
            bearing: 'east',
            rating: '4.0',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$$ - $$$',
            description: '',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d3225683-Reviews-Na_Kuncu_Korytarza_Restaurant-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d3225683-Na_Kuncu_Korytarza_Restaurant-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'sit_down',
                name: 'Sit down',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 601 732 300',
            website: 'http://www.nakuncu.pl/',
            email: 'nakuncu@gmail.com',
            address_obj: {
              street1: 'ul. Korsarzy 34',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-540',
            },
            address: 'ul. Korsarzy 34, Szczecin 70-540 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 660,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 660,
                    close_time: 1380,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '10637',
                name: 'Polish',
              },
              {
                key: '10654',
                name: 'European',
              },
              {
                key: '10742',
                name: 'Eastern European',
              },
              {
                key: '10746',
                name: 'Central European',
              },
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
            ],
            dietary_restrictions: [
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
            ],
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '3374630',
            name: 'Niebo - Wine Bar Cafe',
            latitude: '53.424534',
            longitude: '14.561221',
            num_reviews: '120',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/06/5d/9b/63/outside.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/06/5d/9b/63/outside.jpg',
                  height: '50',
                },
                original: {
                  width: '2048',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/06/5d/9b/63/outside.jpg',
                  height: '1536',
                },
                large: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/06/5d/9b/63/outside.jpg',
                  height: '413',
                },
                medium: {
                  width: '250',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-f/06/5d/9b/63/outside.jpg',
                  height: '188',
                },
              },
              is_blessed: true,
              uploaded_date: '2014-08-12T05:05:41-0400',
              caption: 'Outside',
              id: '106797923',
              helpful_votes: '1',
              published_date: '2014-09-08T16:48:56-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '3.5750515460968018',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '34',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#28 of 407 Restaurants in Szczecin',
            distance: '2.2281128504143903',
            distance_string: '2.2 km',
            bearing: 'east',
            rating: '4.5',
            is_closed: false,
            open_now_text: 'Open Now',
            is_long_closed: false,
            price_level: '$$ - $$$',
            description:
              'Wine Bar Cafe NIEBO is an Italian restaurant in the heart of the city of Szczecin. When I first opened the restaurant I wanted to make it a place where the guests would come not only because of our original italian courses and delicious wines. I wanted to create a place where the guests would enjoy their dinner in a quiet and nice atmosphere. I believe I have achieved my goal - please come and find out yourselve. Konrad Tekiel the owner',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d3374630-Reviews-Niebo_Wine_Bar_Cafe-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d3374630-Niebo_Wine_Bar_Cafe-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'sit_down',
                name: 'Sit down',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 91 433 11 25',
            website: 'http://www.facebook.com/NieboWineBarCafe',
            email: 'winebar@winebarcafe.pl',
            address_obj: {
              street1: 'Rynek Nowy 5',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-533',
            },
            address: 'Rynek Nowy 5, Szczecin 70-533 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 780,
                    close_time: 1200,
                  },
                ],
                [
                  {
                    open_time: 900,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 900,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 900,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 900,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 900,
                    close_time: 1380,
                  },
                ],
                [
                  {
                    open_time: 780,
                    close_time: 1380,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '10746',
                name: 'Central European',
              },
            ],
            dietary_restrictions: [],
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '10221864',
            name: 'Bar Mleczny Turysta',
            latitude: '53.42868',
            longitude: '14.549315',
            num_reviews: '72',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '150',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-l/0d/07/00/e7/bar-mleczny-turysta.jpg',
                  height: '150',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/0d/07/00/e7/bar-mleczny-turysta.jpg',
                  height: '50',
                },
                original: {
                  width: '1500',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/0d/07/00/e7/bar-mleczny-turysta.jpg',
                  height: '1500',
                },
                large: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-p/0d/07/00/e7/bar-mleczny-turysta.jpg',
                  height: '550',
                },
                medium: {
                  width: '450',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/07/00/e7/bar-mleczny-turysta.jpg',
                  height: '450',
                },
              },
              is_blessed: true,
              uploaded_date: '2016-09-20T05:54:13-0400',
              caption: '',
              id: '218562791',
              helpful_votes: '1',
              published_date: '2016-09-20T05:54:13-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '3.5680482387542725',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '35',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#29 of 407 Restaurants in Szczecin',
            distance: '1.3403802479642513',
            distance_string: '1.3 km',
            bearing: 'east',
            rating: '4.5',
            is_closed: false,
            open_now_text: 'Closed Now',
            is_long_closed: false,
            price_level: '$',
            description: '',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d10221864-Reviews-Bar_Mleczny_Turysta-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d10221864-Bar_Mleczny_Turysta-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'fast_food',
                name: 'Fast food',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 91 434 22 01',
            website: 'https://www.facebook.com/BarMlecznyTurysta/',
            email: 'biuro@turystaszczecin.pl',
            address_obj: {
              street1: 'ul. Edmunda Baluki 6a',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-406',
            },
            address: 'ul. Edmunda Baluki 6a, Szczecin 70-406 Poland',
            hours: {
              week_ranges: [
                [],
                [
                  {
                    open_time: 540,
                    close_time: 1080,
                  },
                ],
                [
                  {
                    open_time: 540,
                    close_time: 1080,
                  },
                ],
                [
                  {
                    open_time: 540,
                    close_time: 1080,
                  },
                ],
                [
                  {
                    open_time: 540,
                    close_time: 1080,
                  },
                ],
                [
                  {
                    open_time: 540,
                    close_time: 1080,
                  },
                ],
                [
                  {
                    open_time: 600,
                    close_time: 900,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '10637',
                name: 'Polish',
              },
              {
                key: '10654',
                name: 'European',
              },
              {
                key: '10742',
                name: 'Eastern European',
              },
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
            ],
            dietary_restrictions: [
              {
                key: '10665',
                name: 'Vegetarian Friendly',
              },
            ],
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
          {
            location_id: '3897609',
            name: 'El Globo Restaurant & Pub',
            latitude: '53.432762',
            longitude: '14.544709',
            num_reviews: '127',
            timezone: 'Europe/Warsaw',
            location_string:
              'Szczecin, Western Pomerania Province, Western Poland',
            photo: {
              images: {
                small: {
                  width: '250',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-f/0f/bc/8b/3d/20170630-133751-largejpg.jpg',
                  height: '141',
                },
                thumbnail: {
                  width: '50',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-t/0f/bc/8b/3d/20170630-133751-largejpg.jpg',
                  height: '50',
                },
                original: {
                  width: '3264',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-o/0f/bc/8b/3d/20170630-133751-largejpg.jpg',
                  height: '1836',
                },
                large: {
                  width: '1024',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-w/0f/bc/8b/3d/20170630-133751-largejpg.jpg',
                  height: '576',
                },
                medium: {
                  width: '550',
                  url: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/bc/8b/3d/20170630-133751-largejpg.jpg',
                  height: '309',
                },
              },
              is_blessed: true,
              uploaded_date: '2017-07-01T01:16:24-0400',
              caption: '',
              id: '264014653',
              helpful_votes: '0',
              published_date: '2017-07-01T01:16:24-0400',
              user: {
                user_id: null,
                member_id: '0',
                type: 'user',
              },
            },
            awards: [],
            doubleclick_zone: 'eu.poland',
            preferred_map_engine: 'default',
            raw_ranking: '3.558654308319092',
            ranking_geo: 'Szczecin',
            ranking_geo_id: '274736',
            ranking_position: '36',
            ranking_denominator: '375',
            ranking_category: 'restaurant',
            ranking: '#30 of 407 Restaurants in Szczecin',
            distance: '1.0182931162649806',
            distance_string: '1 km',
            bearing: 'east',
            rating: '4.0',
            is_closed: false,
            open_now_text: 'Closed today',
            is_long_closed: false,
            price_level: '$$ - $$$',
            description: '',
            web_url:
              'https://www.tripadvisor.com/Restaurant_Review-g274736-d3897609-Reviews-El_Globo_Restaurant_Pub-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            write_review:
              'https://www.tripadvisor.com/UserReview-g274736-d3897609-El_Globo_Restaurant_Pub-Szczecin_Western_Pomerania_Province_Western_Poland.html',
            ancestors: [
              {
                subcategory: [
                  {
                    key: 'city',
                    name: 'City',
                  },
                ],
                name: 'Szczecin',
                abbrv: null,
                location_id: '274736',
              },
              {
                subcategory: [
                  {
                    key: 'province',
                    name: 'Province',
                  },
                ],
                name: 'Western Pomerania Province',
                abbrv: null,
                location_id: '2423116',
              },
              {
                subcategory: [
                  {
                    key: 'region',
                    name: 'Region',
                  },
                ],
                name: 'Western Poland',
                abbrv: null,
                location_id: '274794',
              },
              {
                subcategory: [
                  {
                    key: 'country',
                    name: 'Country',
                  },
                ],
                name: 'Poland',
                abbrv: null,
                location_id: '274723',
              },
            ],
            category: {
              key: 'restaurant',
              name: 'Restaurant',
            },
            subcategory: [
              {
                key: 'sit_down',
                name: 'Sit down',
              },
            ],
            parent_display_name: 'Szczecin',
            is_jfy_enabled: false,
            nearest_metro_station: [],
            phone: '+48 91 820 09 03',
            website: 'http://www.elglobo.com.pl',
            email: 'biuro @elglobo.com.pl',
            address_obj: {
              street1: 'Ul. Marsz. Jozefa Pilsudskiego 26/2',
              street2: null,
              city: 'Szczecin',
              state: null,
              country: 'Poland',
              postalcode: '70-461',
            },
            address:
              'Ul. Marsz. Jozefa Pilsudskiego 26/2, Szczecin 70-461 Poland',
            hours: {
              week_ranges: [
                [
                  {
                    open_time: 720,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1320,
                  },
                ],
                [],
                [],
                [
                  {
                    open_time: 720,
                    close_time: 1320,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1440,
                  },
                ],
                [
                  {
                    open_time: 720,
                    close_time: 1440,
                  },
                ],
              ],
              timezone: 'Europe/Warsaw',
            },
            is_candidate_for_contact_info_suppression: false,
            cuisine: [
              {
                key: '10637',
                name: 'Polish',
              },
              {
                key: '10649',
                name: 'Mediterranean',
              },
              {
                key: '10654',
                name: 'European',
              },
              {
                key: '10648',
                name: 'International',
              },
            ],
            dietary_restrictions: [],
            booking: {
              provider: 'Pyszne.pl',
              url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=181539911&geo=3897609&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2f8KT9zqu0Cf5brwUvucBwc&cs=19150e1c8633698e70d02d8f2fff4e477',
            },
            reserve_info: {
              id: '3897609',
              provider: 'Pyszne.pl',
              provider_img:
                'https://static.tacdn.com/img2/branding/hotels/pyszne.pl_white_05.30.2019.png',
              url: 'https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=181539911&geo=3897609&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874917&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=253895736&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2f8KT9zqu0Cf5brwUvucBwc&cs=19150e1c8633698e70d02d8f2fff4e477',
              booking_partner_id: null,
              racable: false,
              api_bookable: false,
              timeslots: null,
              bestoffer: null,
              timeslot_offers: null,
              button_text: 'Order Online',
              disclaimer_text: null,
              banner_text: null,
            },
            establishment_types: [
              {
                key: '10591',
                name: 'Restaurants',
              },
            ],
          },
        ],
        filters: {
          rac_deals_only: {
            false: {
              count: '308',
              label: 'All',
              selected: true,
            },
            true: {
              count: '0',
              label: 'Special Offers',
              selected: false,
            },
          },
          rating: {
            1: {
              count: '3',
              label: 'Terrible',
              selected: false,
            },
            2: {
              count: '7',
              label: 'Poor',
              selected: false,
            },
            3: {
              count: '56',
              label: 'Average',
              selected: false,
            },
            4: {
              count: '151',
              label: 'Very Good',
              selected: false,
            },
            5: {
              count: '52',
              label: 'Excellent',
              selected: false,
            },
            all: {
              count: '308',
              label: 'All',
              selected: true,
            },
          },
          restaurant_mealtype: {
            10597: {
              count: '79',
              label: 'Breakfast',
              locale_independent_label: 'Breakfast',
              priority: '1',
              selected: false,
            },
            10598: {
              count: '198',
              label: 'Lunch',
              locale_independent_label: 'Lunch',
              priority: '3',
              selected: false,
            },
            10599: {
              count: '198',
              label: 'Dinner',
              locale_independent_label: 'Dinner',
              priority: '4',
              selected: false,
            },
            10606: {
              count: '68',
              label: 'Brunch',
              locale_independent_label: 'Brunch',
              priority: '2',
              selected: false,
            },
            all: {
              count: '308',
              label: 'All',
              locale_independent_label: 'All',
              priority: '0',
              selected: true,
            },
          },
          exclude_locations: {
            filtered: {
              count: '308',
              label: 'Results filtered',
            },
            all: {
              count: '308',
              label: 'All',
            },
          },
          dietary_restrictions: {
            10665: {
              count: '56',
              label: 'Vegetarian Friendly',
              locale_independent_label: 'Vegetarian Friendly',
              priority: '1',
              selected: false,
            },
            10697: {
              count: '21',
              label: 'Vegan Options',
              locale_independent_label: 'Vegan Options',
              priority: '2',
              selected: false,
            },
            10992: {
              count: '9',
              label: 'Gluten Free Options',
              locale_independent_label: 'Gluten Free Options',
              priority: '5',
              selected: false,
            },
            all: {
              count: '308',
              label: 'None',
              locale_independent_label: 'All',
              priority: '0',
              selected: true,
            },
          },
          rsrv: {
            false: {
              count: '308',
              label: 'All',
              selected: true,
            },
            true: {
              count: '0',
              label: 'Online Reservations',
              selected: false,
            },
          },
          restaurant_tagcategory: {
            9900: {
              count: '13',
              label: 'Coffee & Tea',
              locale_independent_label: 'Coffee & Tea',
              priority: '4',
              selected: false,
            },
            9901: {
              count: '4',
              label: 'Bakeries',
              locale_independent_label: 'Bakeries',
              priority: '5',
              selected: false,
            },
            9909: {
              count: '12',
              label: 'Dessert',
              locale_independent_label: 'Dessert',
              priority: '3',
              selected: false,
            },
            10591: {
              count: '308',
              label: 'Restaurants',
              locale_independent_label: 'Restaurants',
              priority: '1',
              selected: true,
            },
            11776: {
              count: '8',
              label: 'Bars & Pubs',
              locale_independent_label: 'Bars & Pubs',
              priority: '6',
              selected: false,
            },
            16556: {
              count: '4',
              label: 'Quick Bites',
              locale_independent_label: 'Quick Bites',
              priority: '2',
              selected: false,
            },
            21908: {
              count: '2',
              label: 'Delivery Only',
              locale_independent_label: 'Delivery Only',
              priority: '9',
              selected: false,
            },
            all: {
              count: '308',
              label: 'All',
              locale_independent_label: 'All',
              priority: '0',
              selected: false,
            },
          },
          open_now: {
            false: {
              count: '308',
              label: 'All',
              selected: true,
            },
            true: {
              count: '156',
              label: 'Open Now',
              selected: false,
            },
          },
          min_rating: {
            3: {
              count: '259',
              label: '3',
              selected: false,
            },
            4: {
              count: '203',
              label: '4',
              selected: false,
            },
            5: {
              count: '52',
              label: '5',
              selected: false,
            },
          },
          subcategory: {
            all: {
              count: '308',
              label: 'All',
              selected: true,
            },
            sit_down: {
              count: '151',
              label: 'Sit down',
              selected: false,
            },
            cafe: {
              count: '19',
              label: 'Café',
              selected: false,
            },
            fast_food: {
              count: '19',
              label: 'Fast food',
              selected: false,
            },
          },
          prices_restaurants: {
            10953: {
              count: '83',
              label: '$',
              locale_independent_label: 'Cheap Eats',
              priority: '1',
              selected: false,
            },
            10954: {
              count: '8',
              label: '$$$$',
              locale_independent_label: 'Fine Dining',
              priority: '3',
              selected: false,
            },
            10955: {
              count: '125',
              label: '$$ - $$$',
              locale_independent_label: 'Mid-range',
              priority: '2',
              selected: false,
            },
            all: {
              count: '308',
              label: 'all',
              locale_independent_label: 'All',
              priority: '0',
              selected: true,
            },
          },
          restaurant_dining_options: {
            10600: {
              count: '35',
              label: 'Delivery',
              locale_independent_label: 'Delivery',
              priority: '6',
              selected: false,
            },
            10601: {
              count: '90',
              label: 'Takeout',
              locale_independent_label: 'Takeout',
              priority: '7',
              selected: false,
            },
            10602: {
              count: '97',
              label: 'Reservations',
              locale_independent_label: 'Reservations',
              priority: '5',
              selected: false,
            },
            10603: {
              count: '59',
              label: 'Outdoor Seating',
              locale_independent_label: 'Outdoor Seating',
              priority: '3',
              selected: false,
            },
            10612: {
              count: '4',
              label: 'Buffet',
              locale_independent_label: 'Buffet',
              priority: '8',
              selected: false,
            },
            10702: {
              count: '11',
              label: 'Private Dining',
              locale_independent_label: 'Private Dining',
              priority: '4',
              selected: false,
            },
            10854: {
              count: '25',
              label: 'Parking Available',
              locale_independent_label: 'Parking Available',
              priority: '11',
              selected: false,
            },
            10859: {
              count: '13',
              label: 'Television',
              locale_independent_label: 'Television',
              priority: '9',
              selected: false,
            },
            10861: {
              count: '33',
              label: 'Wheelchair Accessible',
              locale_independent_label: 'Wheelchair Accessible',
              priority: '12',
              selected: false,
            },
            10862: {
              count: '78',
              label: 'Serves Alcohol',
              locale_independent_label: 'Serves Alcohol',
              priority: '13',
              selected: false,
            },
            10870: {
              count: '65',
              label: 'Free Wifi',
              locale_independent_label: 'Free Wifi',
              priority: '10',
              selected: false,
            },
            11780: {
              count: '81',
              label: 'Accepts Credit Cards',
              locale_independent_label: 'Accepts Credit Cards',
              priority: '26',
              selected: false,
            },
            16547: {
              count: '97',
              label: 'Table Service',
              locale_independent_label: 'Table Service',
              priority: '27',
              selected: false,
            },
            20990: {
              count: '5',
              label: 'Waterfront',
              locale_independent_label: 'Waterfront',
              priority: '29',
              selected: false,
            },
            20996: {
              count: '19',
              label: 'Dog Friendly',
              locale_independent_label: 'Dog Friendly',
              priority: '35',
              selected: false,
            },
            21271: {
              count: '16',
              label: 'Family style',
              locale_independent_label: 'Family style',
              priority: '36',
              selected: false,
            },
            21379: {
              count: '8',
              label: 'Non-smoking restaurants',
              locale_independent_label: 'Non-smoking restaurants',
              priority: '37',
              selected: false,
            },
            21907: {
              count: '15',
              label: 'Gift Cards Available',
              locale_independent_label: 'Gift Cards Available',
              priority: '39',
              selected: false,
            },
            all: {
              count: '308',
              label: 'All',
              locale_independent_label: 'All',
              priority: '0',
              selected: true,
            },
          },
          restaurant_tagcategory_standalone: {
            9900: {
              count: '13',
              label: 'Coffee & Tea',
              locale_independent_label: 'Coffee & Tea',
              priority: '5',
              selected: false,
            },
            9901: {
              count: '4',
              label: 'Bakeries',
              locale_independent_label: 'Bakeries',
              priority: '6',
              selected: false,
            },
            9909: {
              count: '12',
              label: 'Dessert',
              locale_independent_label: 'Dessert',
              priority: '4',
              selected: false,
            },
            10591: {
              count: '308',
              label: 'Restaurants',
              locale_independent_label: 'Restaurants',
              priority: '1',
              selected: true,
            },
            11776: {
              count: '8',
              label: 'Bars & Pubs',
              locale_independent_label: 'Bars & Pubs',
              priority: '7',
              selected: false,
            },
            16556: {
              count: '4',
              label: 'Quick Bites',
              locale_independent_label: 'Quick Bites',
              priority: '3',
              selected: false,
            },
            21908: {
              count: '2',
              label: 'Delivery Only',
              locale_independent_label: 'Delivery Only',
              priority: '10',
              selected: false,
            },
            all: {
              count: '338',
              label: 'All',
              locale_independent_label: 'All',
              priority: '0',
              selected: false,
            },
          },
          restaurant_styles: {
            10604: {
              count: '78',
              label: 'Families with children',
              locale_independent_label: 'Families with children',
              priority: '1',
              selected: false,
            },
            10605: {
              count: '31',
              label: 'Business meetings',
              locale_independent_label: 'Business meetings',
              priority: '2',
              selected: false,
            },
            10607: {
              count: '26',
              label: 'Special occasions',
              locale_independent_label: 'Special occasions',
              priority: '3',
              selected: false,
            },
            10608: {
              count: '22',
              label: 'Bar scene',
              locale_independent_label: 'Bar scene',
              priority: '4',
              selected: false,
            },
            10609: {
              count: '36',
              label: 'Large groups',
              locale_independent_label: 'Large groups',
              priority: '5',
              selected: false,
            },
            10610: {
              count: '3',
              label: 'Scenic view',
              locale_independent_label: 'Scenic view',
              priority: '6',
              selected: false,
            },
            10613: {
              count: '10',
              label: 'Local cuisine',
              locale_independent_label: 'Local cuisine',
              priority: '7',
              selected: false,
            },
            10614: {
              count: '30',
              label: 'Romantic',
              locale_independent_label: 'Romantic',
              priority: '8',
              selected: false,
            },
            11777: {
              count: '43',
              label: 'Kids',
              locale_independent_label: 'Kids',
              priority: '9',
              selected: false,
            },
            16550: {
              count: '5',
              label: 'Hidden Gems',
              locale_independent_label: 'Hidden Gems',
              priority: '11',
              selected: false,
            },
            all: {
              count: '308',
              label: 'All',
              locale_independent_label: 'All',
              priority: '0',
              selected: true,
            },
          },
          combined_food: {
            4617: {
              count: '50',
              label: 'Italian',
              locale_independent_label: 'Italian',
              priority: '413',
              selected: false,
            },
            5086: {
              count: '4',
              label: 'French',
              locale_independent_label: 'French',
              priority: '312',
              selected: false,
            },
            5110: {
              count: '4',
              label: 'Mexican',
              locale_independent_label: 'Mexican',
              priority: '493',
              selected: false,
            },
            5379: {
              count: '4',
              label: 'Chinese',
              locale_independent_label: 'Chinese',
              priority: '180',
              selected: false,
            },
            5473: {
              count: '9',
              label: 'Japanese',
              locale_independent_label: 'Japanese',
              priority: '421',
              selected: false,
            },
            9899: {
              count: '2',
              label: 'Ice Cream',
              locale_independent_label: 'Ice Cream',
              priority: '404',
              selected: false,
            },
            9908: {
              count: '27',
              label: 'American',
              locale_independent_label: 'American',
              priority: '14',
              selected: false,
            },
            9910: {
              count: '1',
              label: 'Waffles & Crepes',
              locale_independent_label: 'Waffles & Crepes',
              priority: '814',
              selected: false,
            },
            10345: {
              count: '4',
              label: 'Steakhouse',
              locale_independent_label: 'Steakhouse',
              priority: '720',
              selected: false,
            },
            10346: {
              count: '6',
              label: 'Indian',
              locale_independent_label: 'Indian',
              priority: '406',
              selected: false,
            },
            10347: {
              count: '1',
              label: 'German',
              locale_independent_label: 'German',
              priority: '344',
              selected: false,
            },
            10348: {
              count: '1',
              label: 'Brazilian',
              locale_independent_label: 'Brazilian',
              priority: '90',
              selected: false,
            },
            10618: {
              count: '1',
              label: 'Irish',
              locale_independent_label: 'Irish',
              priority: '411',
              selected: false,
            },
            10621: {
              count: '3',
              label: 'Brew Pub',
              locale_independent_label: 'Brew Pub',
              priority: '94',
              selected: false,
            },
            10626: {
              count: '1',
              label: 'Lebanese',
              locale_independent_label: 'Lebanese',
              priority: '462',
              selected: false,
            },
            10627: {
              count: '1',
              label: 'Dutch',
              locale_independent_label: 'Dutch',
              priority: '269',
              selected: false,
            },
            10632: {
              count: '1',
              label: 'African',
              locale_independent_label: 'African',
              priority: '5',
              selected: false,
            },
            10637: {
              count: '92',
              label: 'Polish',
              locale_independent_label: 'Polish',
              priority: '590',
              selected: false,
            },
            10639: {
              count: '1',
              label: 'Latin',
              locale_independent_label: 'Latin',
              priority: '459',
              selected: false,
            },
            10640: {
              count: '19',
              label: 'Bar',
              locale_independent_label: 'Bar',
              priority: '61',
              selected: false,
            },
            10641: {
              count: '29',
              label: 'Pizza',
              locale_independent_label: 'Pizza',
              priority: '584',
              selected: false,
            },
            10642: {
              count: '31',
              label: 'Cafe',
              locale_independent_label: 'Cafe',
              priority: '109',
              selected: false,
            },
            10643: {
              count: '17',
              label: 'Seafood',
              locale_independent_label: 'Seafood',
              priority: '673',
              selected: false,
            },
            10645: {
              count: '4',
              label: 'Noodle',
              locale_independent_label: 'Noodle',
              priority: '523',
              selected: false,
            },
            10646: {
              count: '13',
              label: 'Fast Food',
              locale_independent_label: 'Fast Food',
              priority: '292',
              selected: false,
            },
            10648: {
              count: '25',
              label: 'International',
              locale_independent_label: 'International',
              priority: '410',
              selected: false,
            },
            10649: {
              count: '18',
              label: 'Mediterranean',
              locale_independent_label: 'Mediterranean',
              priority: '491',
              selected: false,
            },
            10651: {
              count: '5',
              label: 'Barbecue',
              locale_independent_label: 'Barbecue',
              priority: '63',
              selected: false,
            },
            10653: {
              count: '8',
              label: 'Sushi',
              locale_independent_label: 'Sushi',
              priority: '738',
              selected: false,
            },
            10654: {
              count: '125',
              label: 'European',
              locale_independent_label: 'European',
              priority: '287',
              selected: false,
            },
            10655: {
              count: '6',
              label: 'Spanish',
              locale_independent_label: 'Spanish',
              priority: '714',
              selected: false,
            },
            10659: {
              count: '18',
              label: 'Asian',
              locale_independent_label: 'Asian',
              priority: '36',
              selected: false,
            },
            10660: {
              count: '5',
              label: 'Thai',
              locale_independent_label: 'Thai',
              priority: '764',
              selected: false,
            },
            10661: {
              count: '1',
              label: 'Korean',
              locale_independent_label: 'Korean',
              priority: '445',
              selected: false,
            },
            10662: {
              count: '2',
              label: 'British',
              locale_independent_label: 'British',
              priority: '95',
              selected: false,
            },
            10663: {
              count: '6',
              label: 'Turkish',
              locale_independent_label: 'Turkish',
              priority: '793',
              selected: false,
            },
            10664: {
              count: '3',
              label: 'Greek',
              locale_independent_label: 'Greek',
              priority: '354',
              selected: false,
            },
            10668: {
              count: '5',
              label: 'Grill',
              locale_independent_label: 'Grill',
              priority: '358',
              selected: false,
            },
            10669: {
              count: '7',
              label: 'Contemporary',
              locale_independent_label: 'Contemporary',
              priority: '214',
              selected: false,
            },
            10670: {
              count: '17',
              label: 'Pub',
              locale_independent_label: 'Pub',
              priority: '611',
              selected: false,
            },
            10671: {
              count: '9',
              label: 'Fusion',
              locale_independent_label: 'Fusion',
              priority: '334',
              selected: false,
            },
            10675: {
              count: '1',
              label: 'Vietnamese',
              locale_independent_label: 'Vietnamese',
              priority: '809',
              selected: false,
            },
            10676: {
              count: '6',
              label: 'Diner',
              locale_independent_label: 'Diner',
              priority: '258',
              selected: false,
            },
            10678: {
              count: '6',
              label: 'Pasta',
              locale_independent_label: 'Pasta',
              priority: '562',
              selected: false,
            },
            10679: {
              count: '18',
              label: 'Healthy',
              locale_independent_label: 'Healthy',
              priority: '385',
              selected: false,
            },
            10680: {
              count: '1',
              label: 'Portuguese',
              locale_independent_label: 'Portuguese',
              priority: '601',
              selected: false,
            },
            10682: {
              count: '5',
              label: 'Wine Bar',
              locale_independent_label: 'Wine Bar',
              priority: '819',
              selected: false,
            },
            10683: {
              count: '4',
              label: 'Gastropub',
              locale_independent_label: 'Gastropub',
              priority: '338',
              selected: false,
            },
            10686: {
              count: '2',
              label: 'Street Food',
              locale_independent_label: 'Street Food',
              priority: '727',
              selected: false,
            },
            10687: {
              count: '1',
              label: 'Middle Eastern',
              locale_independent_label: 'Middle Eastern',
              priority: '494',
              selected: false,
            },
            10693: {
              count: '2',
              label: 'Russian',
              locale_independent_label: 'Russian',
              priority: '645',
              selected: false,
            },
            10695: {
              count: '1',
              label: 'Szechuan',
              locale_independent_label: 'Szechuan',
              priority: '744',
              parent_id: '5379',
              selected: false,
            },
            10700: {
              count: '7',
              label: 'Soups',
              locale_independent_label: 'Soups',
              priority: '706',
              selected: false,
            },
            10717: {
              count: '1',
              label: 'Albanian',
              locale_independent_label: 'Albanian',
              priority: '8',
              selected: false,
            },
            10732: {
              count: '1',
              label: 'Balti',
              locale_independent_label: 'Balti',
              priority: '56',
              selected: false,
            },
            10738: {
              count: '1',
              label: 'Czech',
              locale_independent_label: 'Czech',
              priority: '252',
              selected: false,
            },
            10742: {
              count: '21',
              label: 'Eastern European',
              locale_independent_label: 'Eastern European',
              priority: '270',
              selected: false,
            },
            10746: {
              count: '23',
              label: 'Central European',
              locale_independent_label: 'Central European',
              priority: '149',
              selected: false,
            },
            10749: {
              count: '2',
              label: 'South American',
              locale_independent_label: 'South American',
              priority: '707',
              selected: false,
            },
            10752: {
              count: '1',
              label: 'Shanghai',
              locale_independent_label: 'Shanghai',
              priority: '681',
              selected: false,
            },
            10756: {
              count: '1',
              label: 'Nepali',
              locale_independent_label: 'Nepali',
              priority: '518',
              selected: false,
            },
            10760: {
              count: '2',
              label: 'Central American',
              locale_independent_label: 'Central American',
              priority: '147',
              selected: false,
            },
            10766: {
              count: '2',
              label: 'Armenian',
              locale_independent_label: 'Armenian',
              priority: '27',
              selected: false,
            },
            10770: {
              count: '3',
              label: 'Ukrainian',
              locale_independent_label: 'Ukrainian',
              priority: '798',
              selected: false,
            },
            10896: {
              count: '1',
              label: 'Dim Sum',
              locale_independent_label: 'Dim Sum',
              priority: '257',
              selected: false,
            },
            10898: {
              count: '2',
              label: 'Dumplings',
              locale_independent_label: 'Dumplings',
              priority: '268',
              selected: false,
            },
            10907: {
              count: '3',
              label: 'Burger',
              locale_independent_label: 'Burger',
              priority: '102',
              selected: false,
            },
            10923: {
              count: '1',
              label: 'Pad Thai',
              locale_independent_label: 'Pad Thai',
              priority: '549',
              selected: false,
            },
            10932: {
              count: '2',
              label: 'Ribs',
              locale_independent_label: 'Ribs',
              priority: '631',
              selected: false,
            },
            10937: {
              count: '2',
              label: 'Shrimp',
              locale_independent_label: 'Shrimp',
              priority: '687',
              selected: false,
            },
            10942: {
              count: '2',
              label: 'Tapas',
              locale_independent_label: 'Tapas',
              priority: '754',
              selected: false,
            },
            11717: {
              count: '1',
              label: 'Tempura',
              locale_independent_label: 'Tempura',
              priority: '761',
              selected: false,
            },
            11721: {
              count: '1',
              label: 'Udon & Soba (Wheat & Buckwheat Noodle)',
              locale_independent_label:
                'Udon & Soba (Wheat & Buckwheat Noodle)',
              priority: '796',
              selected: false,
            },
            11722: {
              count: '1',
              label: 'Ramen',
              locale_independent_label: 'Ramen',
              priority: '625',
              selected: false,
            },
            11739: {
              count: '1',
              label: 'Central Asian',
              locale_independent_label: 'Central Asian',
              priority: '148',
              selected: false,
            },
            11741: {
              count: '2',
              label: 'Caucasian',
              locale_independent_label: 'Caucasian',
              priority: '142',
              selected: false,
            },
            11742: {
              count: '3',
              label: 'Georgian',
              locale_independent_label: 'Georgian',
              priority: '343',
              selected: false,
            },
            11744: {
              count: '2',
              label: 'Arabic',
              locale_independent_label: 'Arabic',
              priority: '24',
              selected: false,
            },
            16554: {
              count: '12',
              label: 'Salad',
              locale_independent_label: 'Salad',
              priority: '647',
              selected: false,
            },
            16555: {
              count: '1',
              label: 'Pancakes',
              locale_independent_label: 'Pancakes',
              priority: '553',
              selected: false,
            },
            19955: {
              count: '1',
              label: 'Wings',
              locale_independent_label: 'Wings',
              priority: '820',
              selected: false,
            },
            20029: {
              count: '1',
              label: 'Chili',
              locale_independent_label: 'Chili',
              priority: '177',
              selected: false,
            },
            20062: {
              count: '1',
              label: 'Neapolitan',
              locale_independent_label: 'Neapolitan',
              priority: '516',
              selected: false,
            },
            20064: {
              count: '1',
              label: 'Campania',
              locale_independent_label: 'Campania',
              priority: '119',
              selected: false,
            },
            20066: {
              count: '3',
              label: 'Tuscan',
              locale_independent_label: 'Tuscan',
              priority: '794',
              selected: false,
            },
            20074: {
              count: '1',
              label: 'Northern-Italian',
              locale_independent_label: 'Northern-Italian',
              priority: '525',
              selected: false,
            },
            20075: {
              count: '3',
              label: 'Central-Italian',
              locale_independent_label: 'Central-Italian',
              priority: '150',
              selected: false,
            },
            20076: {
              count: '4',
              label: 'Southern-Italian',
              locale_independent_label: 'Southern-Italian',
              priority: '708',
              selected: false,
            },
            20077: {
              count: '1',
              label: 'Catalan',
              locale_independent_label: 'Catalan',
              priority: '140',
              selected: false,
            },
            20181: {
              count: '2',
              label: 'Curry',
              locale_independent_label: 'Curry',
              priority: '247',
              selected: false,
            },
            20182: {
              count: '1',
              label: 'Green Curry',
              locale_independent_label: 'Green Curry',
              priority: '356',
              selected: false,
            },
            20183: {
              count: '1',
              label: 'Red Curry',
              locale_independent_label: 'Red Curry',
              priority: '628',
              selected: false,
            },
            20184: {
              count: '1',
              label: 'Yellow Curry',
              locale_independent_label: 'Yellow Curry',
              priority: '824',
              selected: false,
            },
            20185: {
              count: '1',
              label: 'Kabobs',
              locale_independent_label: 'Kabobs',
              priority: '431',
              selected: false,
            },
            20547: {
              count: '4',
              label: 'Salmon',
              locale_independent_label: 'Salmon',
              priority: '650',
              selected: false,
            },
            20552: {
              count: '2',
              label: 'Tuna',
              locale_independent_label: 'Tuna',
              priority: '787',
              selected: false,
            },
            20699: {
              count: '1',
              label: 'Prawns',
              locale_independent_label: 'Prawns',
              priority: '606',
              selected: false,
            },
            20711: {
              count: '1',
              label: 'Octopus',
              locale_independent_label: 'Octopus',
              priority: '530',
              selected: false,
            },
            20740: {
              count: '1',
              label: 'Fish Soup',
              locale_independent_label: 'Fish Soup',
              priority: '304',
              selected: false,
            },
            20752: {
              count: '8',
              label: 'Beef',
              locale_independent_label: 'Beef',
              priority: '67',
              selected: false,
            },
            20754: {
              count: '1',
              label: 'Hamburgers',
              locale_independent_label: 'Hamburgers',
              priority: '377',
              selected: false,
            },
            21022: {
              count: '7',
              label: 'Duck',
              locale_independent_label: 'Duck',
              priority: '265',
              selected: false,
            },
            21174: {
              count: '1',
              label: 'Lamb',
              locale_independent_label: 'Lamb',
              priority: '455',
              selected: false,
            },
            21219: {
              count: '1',
              label: 'Wild boar',
              locale_independent_label: 'Wild boar',
              priority: '818',
              selected: false,
            },
            21222: {
              count: '1',
              label: 'Neapolitan pizza',
              locale_independent_label: 'Neapolitan pizza',
              priority: '517',
              selected: false,
            },
            21239: {
              count: '4',
              label: 'Pesto',
              locale_independent_label: 'Pesto',
              priority: '575',
              selected: false,
            },
            21270: {
              count: '1',
              label: 'Udon',
              locale_independent_label: 'Udon',
              priority: '795',
              selected: false,
            },
            21275: {
              count: '1',
              label: 'Cakes',
              locale_independent_label: 'Cakes',
              priority: '111',
              selected: false,
            },
            21320: {
              count: '1',
              label: 'Sashimi',
              locale_independent_label: 'Sashimi',
              priority: '662',
              selected: false,
            },
            21324: {
              count: '10',
              label: 'Fish',
              locale_independent_label: 'Fish',
              priority: '301',
              selected: false,
            },
            21326: {
              count: '4',
              label: 'Pork',
              locale_independent_label: 'Pork',
              priority: '594',
              selected: false,
            },
            21353: {
              count: '2',
              label: 'Dining bars',
              locale_independent_label: 'Dining bars',
              priority: '259',
              selected: false,
            },
            21355: {
              count: '4',
              label: 'Beer restaurants',
              locale_independent_label: 'Beer restaurants',
              priority: '72',
              selected: false,
            },
            all: {
              count: '308',
              label: 'All Cuisines',
              locale_independent_label: 'All',
              priority: '0',
              selected: true,
            },
          },
        },
        filters_v2: {
          search_filters: [
            {
              key: 'restaurant_tagcategory_standalone',
              value: '10591',
            },
            {
              key: 'restaurant_mealtype',
              value: 'all',
            },
          ],
          filter_sections: [
            {
              label: 'Most Popular',
              section_id: 'most_popular',
              filter_groups: [
                {
                  type: 'multi_select',
                  key: 'prices_restaurants',
                  tracking_key: 'price',
                  label: 'Price',
                  options: [
                    {
                      label: '$',
                      value: '10953',
                      selected: false,
                      count: '83',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: '$$ - $$$',
                      value: '10955',
                      selected: false,
                      count: '125',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: '$$$$',
                      value: '10954',
                      selected: false,
                      count: '8',
                      default: false,
                      single_select: false,
                    },
                  ],
                },
                {
                  type: 'single_select',
                  key: 'open_now',
                  tracking_key: 'open_now',
                  label: 'Open Now',
                  options: [
                    {
                      label: 'Open Now',
                      value: 'true',
                      selected: false,
                      count: '156',
                      default: false,
                    },
                  ],
                },
              ],
            },
            {
              label: 'Cuisine Type',
              section_id: 'combined_food',
              filter_groups: [
                {
                  type: 'multi_select',
                  key: 'combined_food',
                  tracking_key: 'Cuisine',
                  label: 'Cuisine Type',
                  options: [
                    {
                      label: 'All Cuisines',
                      value: 'all',
                      selected: true,
                      count: '308',
                      default: true,
                      single_select: true,
                    },
                    {
                      label: 'African',
                      value: '10632',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Albanian',
                      value: '10717',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'American',
                      value: '9908',
                      selected: false,
                      count: '27',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Arabic',
                      value: '11744',
                      selected: false,
                      count: '2',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Armenian',
                      value: '10766',
                      selected: false,
                      count: '2',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Asian',
                      value: '10659',
                      selected: false,
                      count: '18',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Balti',
                      value: '10732',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Bar',
                      value: '10640',
                      selected: false,
                      count: '19',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Barbecue',
                      value: '10651',
                      selected: false,
                      count: '5',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Beef',
                      value: '20752',
                      selected: false,
                      count: '8',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Beer restaurants',
                      value: '21355',
                      selected: false,
                      count: '4',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Brazilian',
                      value: '10348',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Brew Pub',
                      value: '10621',
                      selected: false,
                      count: '3',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'British',
                      value: '10662',
                      selected: false,
                      count: '2',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Burger',
                      value: '10907',
                      selected: false,
                      count: '3',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Cafe',
                      value: '10642',
                      selected: false,
                      count: '31',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Cakes',
                      value: '21275',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Campania',
                      value: '20064',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Catalan',
                      value: '20077',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Caucasian',
                      value: '11741',
                      selected: false,
                      count: '2',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Central American',
                      value: '10760',
                      selected: false,
                      count: '2',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Central Asian',
                      value: '11739',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Central European',
                      value: '10746',
                      selected: false,
                      count: '23',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Central-Italian',
                      value: '20075',
                      selected: false,
                      count: '3',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Chili',
                      value: '20029',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Chinese',
                      value: '5379',
                      selected: false,
                      count: '4',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Contemporary',
                      value: '10669',
                      selected: false,
                      count: '7',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Curry',
                      value: '20181',
                      selected: false,
                      count: '2',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Czech',
                      value: '10738',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Dim Sum',
                      value: '10896',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Diner',
                      value: '10676',
                      selected: false,
                      count: '6',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Dining bars',
                      value: '21353',
                      selected: false,
                      count: '2',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Duck',
                      value: '21022',
                      selected: false,
                      count: '7',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Dumplings',
                      value: '10898',
                      selected: false,
                      count: '2',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Dutch',
                      value: '10627',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Eastern European',
                      value: '10742',
                      selected: false,
                      count: '21',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'European',
                      value: '10654',
                      selected: false,
                      count: '125',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Fast Food',
                      value: '10646',
                      selected: false,
                      count: '13',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Fish',
                      value: '21324',
                      selected: false,
                      count: '10',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Fish Soup',
                      value: '20740',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'French',
                      value: '5086',
                      selected: false,
                      count: '4',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Fusion',
                      value: '10671',
                      selected: false,
                      count: '9',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Gastropub',
                      value: '10683',
                      selected: false,
                      count: '4',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Georgian',
                      value: '11742',
                      selected: false,
                      count: '3',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'German',
                      value: '10347',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Greek',
                      value: '10664',
                      selected: false,
                      count: '3',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Green Curry',
                      value: '20182',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Grill',
                      value: '10668',
                      selected: false,
                      count: '5',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Hamburgers',
                      value: '20754',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Healthy',
                      value: '10679',
                      selected: false,
                      count: '18',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Ice Cream',
                      value: '9899',
                      selected: false,
                      count: '2',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Indian',
                      value: '10346',
                      selected: false,
                      count: '6',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'International',
                      value: '10648',
                      selected: false,
                      count: '25',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Irish',
                      value: '10618',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Italian',
                      value: '4617',
                      selected: false,
                      count: '50',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Japanese',
                      value: '5473',
                      selected: false,
                      count: '9',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Kabobs',
                      value: '20185',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Korean',
                      value: '10661',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Lamb',
                      value: '21174',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Latin',
                      value: '10639',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Lebanese',
                      value: '10626',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Mediterranean',
                      value: '10649',
                      selected: false,
                      count: '18',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Mexican',
                      value: '5110',
                      selected: false,
                      count: '4',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Middle Eastern',
                      value: '10687',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Neapolitan',
                      value: '20062',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Neapolitan pizza',
                      value: '21222',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Nepali',
                      value: '10756',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Noodle',
                      value: '10645',
                      selected: false,
                      count: '4',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Northern-Italian',
                      value: '20074',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Octopus',
                      value: '20711',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Pad Thai',
                      value: '10923',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Pancakes',
                      value: '16555',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Pasta',
                      value: '10678',
                      selected: false,
                      count: '6',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Pesto',
                      value: '21239',
                      selected: false,
                      count: '4',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Pizza',
                      value: '10641',
                      selected: false,
                      count: '29',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Polish',
                      value: '10637',
                      selected: false,
                      count: '92',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Pork',
                      value: '21326',
                      selected: false,
                      count: '4',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Portuguese',
                      value: '10680',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Prawns',
                      value: '20699',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Pub',
                      value: '10670',
                      selected: false,
                      count: '17',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Ramen',
                      value: '11722',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Red Curry',
                      value: '20183',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Ribs',
                      value: '10932',
                      selected: false,
                      count: '2',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Russian',
                      value: '10693',
                      selected: false,
                      count: '2',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Salad',
                      value: '16554',
                      selected: false,
                      count: '12',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Salmon',
                      value: '20547',
                      selected: false,
                      count: '4',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Sashimi',
                      value: '21320',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Seafood',
                      value: '10643',
                      selected: false,
                      count: '17',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Shanghai',
                      value: '10752',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Shrimp',
                      value: '10937',
                      selected: false,
                      count: '2',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Soups',
                      value: '10700',
                      selected: false,
                      count: '7',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'South American',
                      value: '10749',
                      selected: false,
                      count: '2',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Southern-Italian',
                      value: '20076',
                      selected: false,
                      count: '4',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Spanish',
                      value: '10655',
                      selected: false,
                      count: '6',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Steakhouse',
                      value: '10345',
                      selected: false,
                      count: '4',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Street Food',
                      value: '10686',
                      selected: false,
                      count: '2',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Sushi',
                      value: '10653',
                      selected: false,
                      count: '8',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Szechuan',
                      value: '10695',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                      parent_id: '5379',
                    },
                    {
                      label: 'Tapas',
                      value: '10942',
                      selected: false,
                      count: '2',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Tempura',
                      value: '11717',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Thai',
                      value: '10660',
                      selected: false,
                      count: '5',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Tuna',
                      value: '20552',
                      selected: false,
                      count: '2',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Turkish',
                      value: '10663',
                      selected: false,
                      count: '6',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Tuscan',
                      value: '20066',
                      selected: false,
                      count: '3',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Udon',
                      value: '21270',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Udon & Soba (Wheat & Buckwheat Noodle)',
                      value: '11721',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Ukrainian',
                      value: '10770',
                      selected: false,
                      count: '3',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Vietnamese',
                      value: '10675',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Waffles & Crepes',
                      value: '9910',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Wild boar',
                      value: '21219',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Wine Bar',
                      value: '10682',
                      selected: false,
                      count: '5',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Wings',
                      value: '19955',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Yellow Curry',
                      value: '20184',
                      selected: false,
                      count: '1',
                      default: false,
                      single_select: false,
                    },
                  ],
                },
              ],
            },
            {
              label: 'Dietary Restrictions',
              section_id: 'dietary_restrictions',
              filter_groups: [
                {
                  type: 'multi_select',
                  key: 'dietary_restrictions',
                  tracking_key: 'DietaryRestrictions',
                  label: 'Dietary Restrictions',
                  options: [
                    {
                      label: 'None',
                      value: 'all',
                      selected: true,
                      count: '308',
                      default: true,
                      single_select: true,
                    },
                    {
                      label: 'Vegetarian Friendly',
                      value: '10665',
                      selected: false,
                      count: '56',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Vegan Options',
                      value: '10697',
                      selected: false,
                      count: '21',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Gluten Free Options',
                      value: '10992',
                      selected: false,
                      count: '9',
                      default: false,
                      single_select: false,
                    },
                  ],
                },
              ],
            },
            {
              label: 'Meals',
              section_id: 'restaurant_mealtype',
              filter_groups: [
                {
                  type: 'multi_select',
                  key: 'restaurant_mealtype',
                  tracking_key: 'Meals',
                  label: 'Meals',
                  options: [
                    {
                      label: 'Breakfast',
                      value: '10597',
                      selected: false,
                      count: '79',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Brunch',
                      value: '10606',
                      selected: false,
                      count: '68',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Lunch',
                      value: '10598',
                      selected: false,
                      count: '198',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Dinner',
                      value: '10599',
                      selected: false,
                      count: '198',
                      default: false,
                      single_select: false,
                    },
                  ],
                },
              ],
            },
            {
              label: 'Establishment Type',
              section_id: 'restaurant_tagcategory',
              filter_groups: [
                {
                  type: 'multi_select',
                  key: 'restaurant_tagcategory',
                  tracking_key: 'mobile_establishment_type_filter',
                  label: 'Establishment Type',
                  options: [
                    {
                      label: 'Restaurants',
                      value: '10591',
                      selected: true,
                      count: '308',
                      default: true,
                      single_select: false,
                    },
                    {
                      label: 'Quick Bites',
                      value: '16556',
                      selected: false,
                      count: '4',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Dessert',
                      value: '9909',
                      selected: false,
                      count: '12',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Coffee & Tea',
                      value: '9900',
                      selected: false,
                      count: '13',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Bakeries',
                      value: '9901',
                      selected: false,
                      count: '4',
                      default: false,
                      single_select: false,
                    },
                    {
                      label: 'Bars & Pubs',
                      value: '11776',
                      selected: false,
                      count: '8',
                      default: false,
                      single_select: false,
                    },
                  ],
                },
              ],
            },
            {
              label: 'Minimum Traveler Rating',
              section_id: 'min_rating',
              filter_groups: [
                {
                  type: 'single_select',
                  key: 'min_rating',
                  tracking_key: 'travelerrating',
                  label: 'Minimum Traveler Rating',
                  options: [
                    {
                      label: '3',
                      value: '3',
                      selected: false,
                      count: '259',
                      default: false,
                    },
                    {
                      label: '4',
                      value: '4',
                      selected: false,
                      count: '203',
                      default: false,
                    },
                    {
                      label: '5',
                      value: '5',
                      selected: false,
                      count: '52',
                      default: false,
                    },
                  ],
                },
              ],
            },
            {
              label: 'Restaurant Features',
              section_id: 'restaurant_features',
              filter_groups: [
                {
                  type: 'multi_select',
                  key: 'restaurant_styles',
                  tracking_key: 'Good_for',
                  label: 'Good for',
                  options: [
                    {
                      label: 'Families with children',
                      value: '10604',
                      selected: false,
                      count: '78',
                      default: false,
                      single_select: false,
                    },
                  ],
                },
                {
                  type: 'multi_select',
                  key: 'restaurant_dining_options',
                  tracking_key: 'DiningOptions',
                  label: 'Restaurant Features',
                  options: [
                    {
                      label: 'Reservations',
                      value: '10602',
                      selected: false,
                      count: '97',
                      default: false,
                      single_select: false,
                    },
                  ],
                },
                {
                  type: 'multi_select',
                  key: 'restaurant_dining_options',
                  tracking_key: 'DiningOptions',
                  label: 'Restaurant Features',
                  options: [
                    {
                      label: 'Delivery',
                      value: '10600',
                      selected: false,
                      count: '35',
                      default: false,
                      single_select: false,
                    },
                  ],
                },
                {
                  type: 'multi_select',
                  key: 'restaurant_dining_options',
                  tracking_key: 'DiningOptions',
                  label: 'Restaurant Features',
                  options: [
                    {
                      label: 'Takeout',
                      value: '10601',
                      selected: false,
                      count: '90',
                      default: false,
                      single_select: false,
                    },
                  ],
                },
                {
                  type: 'multi_select',
                  key: 'restaurant_dining_options',
                  tracking_key: 'DiningOptions',
                  label: 'Restaurant Features',
                  options: [
                    {
                      label: 'Free Wifi',
                      value: '10870',
                      selected: false,
                      count: '65',
                      default: false,
                      single_select: false,
                    },
                  ],
                },
                {
                  type: 'multi_select',
                  key: 'restaurant_dining_options',
                  tracking_key: 'DiningOptions',
                  label: 'Restaurant Features',
                  options: [
                    {
                      label: 'Gift Cards Available',
                      value: '21907',
                      selected: false,
                      count: '15',
                      default: false,
                      single_select: false,
                    },
                  ],
                },
              ],
            },
          ],
          metadata: {
            sort: 'Ranking',
          },
        },
        restaurant_availability_options: {
          day: '17',
          month: '1',
          year: '2023',
          hour: '21',
          minute: '0',
          people: '2',
          datestring: '01/17/2023',
          is_default: true,
          is_set: false,
          racable: false,
          time_options: {
            selected_option: {
              value: '21:00:00',
              display: '9:00 PM',
              selected: true,
            },
            options: [
              {
                value: '00:00:00',
                display: '12:00 AM',
                selected: null,
              },
              {
                value: '00:30:00',
                display: '12:30 AM',
                selected: null,
              },
              {
                value: '01:00:00',
                display: '1:00 AM',
                selected: null,
              },
              {
                value: '01:30:00',
                display: '1:30 AM',
                selected: null,
              },
              {
                value: '02:00:00',
                display: '2:00 AM',
                selected: null,
              },
              {
                value: '02:30:00',
                display: '2:30 AM',
                selected: null,
              },
              {
                value: '03:00:00',
                display: '3:00 AM',
                selected: null,
              },
              {
                value: '03:30:00',
                display: '3:30 AM',
                selected: null,
              },
              {
                value: '04:00:00',
                display: '4:00 AM',
                selected: null,
              },
              {
                value: '04:30:00',
                display: '4:30 AM',
                selected: null,
              },
              {
                value: '05:00:00',
                display: '5:00 AM',
                selected: null,
              },
              {
                value: '05:30:00',
                display: '5:30 AM',
                selected: null,
              },
              {
                value: '06:00:00',
                display: '6:00 AM',
                selected: null,
              },
              {
                value: '06:30:00',
                display: '6:30 AM',
                selected: null,
              },
              {
                value: '07:00:00',
                display: '7:00 AM',
                selected: null,
              },
              {
                value: '07:30:00',
                display: '7:30 AM',
                selected: null,
              },
              {
                value: '08:00:00',
                display: '8:00 AM',
                selected: null,
              },
              {
                value: '08:30:00',
                display: '8:30 AM',
                selected: null,
              },
              {
                value: '09:00:00',
                display: '9:00 AM',
                selected: null,
              },
              {
                value: '09:30:00',
                display: '9:30 AM',
                selected: null,
              },
              {
                value: '10:00:00',
                display: '10:00 AM',
                selected: null,
              },
              {
                value: '10:30:00',
                display: '10:30 AM',
                selected: null,
              },
              {
                value: '11:00:00',
                display: '11:00 AM',
                selected: null,
              },
              {
                value: '11:30:00',
                display: '11:30 AM',
                selected: null,
              },
              {
                value: '12:00:00',
                display: '12:00 PM',
                selected: null,
              },
              {
                value: '12:30:00',
                display: '12:30 PM',
                selected: null,
              },
              {
                value: '13:00:00',
                display: '1:00 PM',
                selected: null,
              },
              {
                value: '13:30:00',
                display: '1:30 PM',
                selected: null,
              },
              {
                value: '14:00:00',
                display: '2:00 PM',
                selected: null,
              },
              {
                value: '14:30:00',
                display: '2:30 PM',
                selected: null,
              },
              {
                value: '15:00:00',
                display: '3:00 PM',
                selected: null,
              },
              {
                value: '15:30:00',
                display: '3:30 PM',
                selected: null,
              },
              {
                value: '16:00:00',
                display: '4:00 PM',
                selected: null,
              },
              {
                value: '16:30:00',
                display: '4:30 PM',
                selected: null,
              },
              {
                value: '17:00:00',
                display: '5:00 PM',
                selected: null,
              },
              {
                value: '17:30:00',
                display: '5:30 PM',
                selected: null,
              },
              {
                value: '18:00:00',
                display: '6:00 PM',
                selected: null,
              },
              {
                value: '18:30:00',
                display: '6:30 PM',
                selected: null,
              },
              {
                value: '19:00:00',
                display: '7:00 PM',
                selected: null,
              },
              {
                value: '19:30:00',
                display: '7:30 PM',
                selected: null,
              },
              {
                value: '20:00:00',
                display: '8:00 PM',
                selected: null,
              },
              {
                value: '20:30:00',
                display: '8:30 PM',
                selected: null,
              },
              {
                value: '21:00:00',
                display: '9:00 PM',
                selected: true,
              },
              {
                value: '21:30:00',
                display: '9:30 PM',
                selected: null,
              },
              {
                value: '22:00:00',
                display: '10:00 PM',
                selected: null,
              },
              {
                value: '22:30:00',
                display: '10:30 PM',
                selected: null,
              },
              {
                value: '23:00:00',
                display: '11:00 PM',
                selected: null,
              },
              {
                value: '23:30:00',
                display: '11:30 PM',
                selected: null,
              },
            ],
          },
          people_options: {
            selected_option: {
              value: '2',
              display: '2',
              selected: true,
            },
            options: [
              {
                value: '1',
                display: '1',
                selected: null,
              },
              {
                value: '2',
                display: '2',
                selected: true,
              },
              {
                value: '3',
                display: '3',
                selected: null,
              },
              {
                value: '4',
                display: '4',
                selected: null,
              },
              {
                value: '5',
                display: '5',
                selected: null,
              },
              {
                value: '6',
                display: '6',
                selected: null,
              },
              {
                value: '7',
                display: '7',
                selected: null,
              },
              {
                value: '8',
                display: '8',
                selected: null,
              },
              {
                value: '9',
                display: '9',
                selected: null,
              },
              {
                value: '10',
                display: '10',
                selected: null,
              },
              {
                value: '11',
                display: '11',
                selected: null,
              },
              {
                value: '12',
                display: '12',
                selected: null,
              },
              {
                value: '13',
                display: '13',
                selected: null,
              },
              {
                value: '14',
                display: '14',
                selected: null,
              },
              {
                value: '15',
                display: '15',
                selected: null,
              },
              {
                value: '16',
                display: '16',
                selected: null,
              },
              {
                value: '17',
                display: '17',
                selected: null,
              },
              {
                value: '18',
                display: '18',
                selected: null,
              },
              {
                value: '19',
                display: '19',
                selected: null,
              },
              {
                value: '20',
                display: '20',
                selected: null,
              },
            ],
          },
        },
        open_hours_options: {
          closed_count: '56',
          is_set: false,
          low_coverage_primary_message:
            "Open hours aren't available for all places.",
          timezone: 'Europe/Warsaw',
          unsure_count: '96',
          open_count: '156',
          low_coverage_secondary_message: 'Show all restaurants',
          current_value: 'now',
        },
        paging: {
          results: '30',
          total_results: '308',
        },
      };
      state.restaurants = data.data.filter((r) => r.name);

      state.loading = false;
    });
    builder.addCase(fetchRestaurantsInBoundary.rejected, (state, action) => {
      state.restaurants = [];
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
