<?php

namespace App\Http\Controllers;

use App\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    function __construct(){
        // clients : model n client
        $clients = new Client();
    }

    function getListClients(){
        $clients = new Client();
        $dataFromModel = $clients->getClients();
        return response()->json($dataFromModel);
    }

    // function addClients(Request $request){
    //     // addClient($data)
    //     $clients = new Client();

    //     // vous pouvez aussi recupérer tout les données input comme un tableau en utilisant la methode 
    //     // $request->all()
        
    //     $data = $clients->addClient($request->all());
      
    // }

    // function addClients(){
    //    echo "hello";
    // }
}
