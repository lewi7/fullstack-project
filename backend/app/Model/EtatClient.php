<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use DB;

class EtatClient extends Model
{
     protected $fillable = [
        'id','client_id', 'temperature','frequence_toux',
    ];

   	function getEtatClient(){
    	// $data = DB::table('clients.*,etat_clients.* FROM clients INNER JOIN etat_clients ON clients.id = etat_clients.client_id')->get();

    	$data = DB::table('clients')
            ->join('etat_clients', 'clients.id', '=', 'etat_clients.client_id')
            ->select('clients.*', 'etat_clients.*')
            ->get();

        return $data;
    }
}
