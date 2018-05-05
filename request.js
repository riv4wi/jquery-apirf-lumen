var accessToken = '';

function getToken() {
    $.ajax({
        'url': 'http://apirf.lumen/auth/login',
        'async': true,
        'crossDomain': true,
        'method': 'POST',
        'headers': {
            'Accept-Language': 'sp',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        'data': {
            'email': 'pp@gmail.com',
            'password': '123'
        },
        'success': function (response) {
            accessToken = response.token;
            $('#sectionToken').html(accessToken);
            $('#sectionToken').css("background-color", "#AEFF36");
            return response;
        },
        'error': function (XMLHttpRequest, textStatus, errorThrown) {
            alert('Error: ' + errorThrown);
            console.log(XMLHttpRequest.status + ' ' + XMLHttpRequest.statusText);
            return false;
        }
    });
}

function getManufacturersList() {
    $.ajax({
        'url': 'http://apirf.lumen/v1/manufacturers',
        'type': 'GET',
        'content-Type': 'x-www-form-urlencoded',
        'dataType': 'json',
        'headers': {
            'Authorization': 'bearer ' + accessToken
        },
        'success': function (response) {
            var returnResult = JSON.stringify(response);
            $('#callResults').html(returnResult);
            return response;
        },
        'error': function (XMLHttpRequest, textStatus, errorThrown) {
            $('#callResults').html('Error: ' + errorThrown);
            console.log(XMLHttpRequest.status + ' ' + XMLHttpRequest.statusText);
            return false;
        }
    });
}