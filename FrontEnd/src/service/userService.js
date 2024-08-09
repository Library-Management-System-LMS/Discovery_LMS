import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/users"

class UserService {
    addUser(user){
        console.log(user)
        return axios.post(USER_API_BASE_URL+'/userslist', user);
    
    }
    
    login(UserEmailPass) 
    {       
       return axios.post(USER_API_BASE_URL+'/signin',UserEmailPass)             //"http://localhost:8080/user/login?email=bhosalerahul5920@gmail.com&pass=1234
    }  
    
    getAllsingers(cat){
        return axios.post(USER_API_BASE_URL+'/artistsAdateBycategory/'+cat)
    }

    addOrder(booked_date, order_price,artist_emailid, user_emailid ){
        console.log("in userservice  "+ booked_date, order_price, artist_emailid, user_emailid)
        return axios.post(USER_API_BASE_URL+'/orderslist/'+booked_date+'/null/'+order_price+'/null/'+artist_emailid+'/'+user_emailid)
        // return axios.post(USER_API_BASE_URL+'/orderslist/null/null/1200/null/lala@gmail.com/setu@gmail.com')
    }

    getBookingByEmail(uemail)
    {
        console.log("in userservice get booking by email "+ uemail)

        return axios.get(USER_API_BASE_URL+'/Userorderslistbyuemail/'+uemail)
    }

    artistLogin(artist)
    {
        return axios.post(USER_API_BASE_URL+'/Alogin',artist);
    }

    addArtist(artist)
    {
        console.log("in userservice addArtist "+  JSON.stringify(artist))
        return axios.post(USER_API_BASE_URL+'/artistslist',artist);
    }


    getAdateByEmail(artistemail)
    {
        console.log("in userservice getAdateByEamil "+  JSON.stringify(artistemail))
        return axios.get(USER_API_BASE_URL+'/getadatebyemail/'+artistemail);
    }

    deleteByOrderId(oid)
    {
        return axios.delete(USER_API_BASE_URL+'/orderslist/'+oid);
    }

    updateArtistByEmail(name, gender, genre, fromdate,fees, email)
    {
        return axios.put(USER_API_BASE_URL+'/artistslist/'+name+'/'+gender+'/'+genre+'/'+fromdate+'/'+fees+'/'+email);
    }

    confirmBooking(artistEmail)
    {
        // JSON.stringify(artistEmail)
        // console.log("in confirm booking "+   JSON.stringify(artistEmail))
         axios.put(USER_API_BASE_URL+'/confirmbooking/'+ artistEmail);
    }

    getOrdersByUserEmail(userEmail)
    {
        JSON.stringify(userEmail)
        console.log("in userservice get ordeers "+  userEmail)
        return axios.get(USER_API_BASE_URL+'/bookedartistbyuemail/'+userEmail);
    }

   
}

export default new UserService()