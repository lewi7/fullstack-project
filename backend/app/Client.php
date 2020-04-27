<?php

namespace App;
use DB;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    function getClients(){
        $data = DB::table('clients')->get();
        return $data;
    }

    function addClient($data){
        DB::table('clients')->insert($data);
    }
}
