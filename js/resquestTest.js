'use strict';

ajaxRequest('GET', 'prj-TMS-web-back-api.fr/php/database.php/select_patient?', DisplayUsers);

function DisplayUsers(patients){
    for(let i = 0; i < patients.length; i++)
    $('#selection_patient').append('<option value="' + patients[i].id + '">' + patients[i].nom + '</option>');
}