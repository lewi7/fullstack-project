<?php

namespace App;
use DB;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
	// efa vitan ressource

    // function getClients(){
    //     $data = DB::table('clients')->get();
    //     return $data;
    // }

    function addClient($data){
        DB::table('clients')->insert($data);
    }

    function updateClient($id,$data){
        DB::table('clients')->where('id',$id)->update($data);
    }

    function deleteClient($id){
        DB::table('clients')->where('id',$id)->delete();
    }

    
}
