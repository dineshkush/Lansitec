function checkMode() {
    var modeVal = $('#modeVal  option:selected').val();
    switch (modeVal * 1) {
        case 1:
            document.getElementById("tips").innerHTML = '* 10~30 (Decimal)'
            break;
        case 2:
            $('#powerVal').val('2')
            break;
        case 3:
            document.getElementById("tips").innerHTML = '* 2~17 (Decimal)'
            break;
        case 4:
            document.getElementById("tips").innerHTML = '* Max ERP-10  ~ Max ERP-2 (Decimal)'
            break;
        case 5:
            document.getElementById("tips").innerHTML = '* -5~10 (Decimal)'
            break;
        case 6:
            document.getElementById("tips").innerHTML = '* 2~20 (Decimal)'
            break;
        case 7:
            document.getElementById("tips").innerHTML = '* 10~28 (Decimal)'
            break;
    }
}
function checkCommand() {
    var modeVal = $('#CommandVal  option:selected').val();
    if (modeVal>4) {
        document.getElementById("payloadVal2").disabled="";;
    }else{
        document.getElementById("payloadVal2").disabled="disabled";;
    }
}

function uplinkMessageSearch() {
    var data = {
	payload:$('#payloadVal').val(),
	}
    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        //url: "https://dev.lansitec.com:8100/api/badgeDataAnalysis",
	url: "http://iot.lansitec.com:14211/container/tracker/up",
        cache: false,
        data: JSON.stringify(data),
        async: true,
        error: function (res) {
            document.getElementById("uplinkMessage").innerHTML = ''
            document.getElementById("uplinkMessage").innerHTML = JSON.stringify(res.responseText)
        },
        success: function (data) {
            document.getElementById("uplinkMessage").innerHTML = JSON.stringify(data.data)
        }

    })
}

function registerAcceptanceSearch() {
    var data = {
        payload: $('#resultVal').val()
    }
    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        url: "http://iot.lansitec.com:14211/tracker/downlinkMessage/registerAcceptance",
        cache: false,
        data: JSON.stringify(data),
        async: true,
        error: function(res) {
            console.log(res)
        },
        success: function(data) {
            document.getElementById("registerAcceptance").innerHTML = JSON.stringify(data.data)
        }

    })
}

function loraConfigurationSearch() {
    var data = {
        adr: $('#adrVal').val(),
        dr: $('#datarateVal').val(),
        power: $('#powerVal').val(),
    }
    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        url: "http://iot.lansitec.com:14211/container/tracker/down/lora",
        cache: false,
        data: JSON.stringify(data),
        async: true,
        error: function(res) {
            console.log(res)
        },
        success: function(data) {
            document.getElementById("loraConfiguration").innerHTML = JSON.stringify(data.data)
        }

    })
}

function trackerConfigurationSearch() {
    var data = {
        gnssen: $('#gnssenVal').val()*1,
        posmode: $('#posmodeVal').val()*1,
        switchen: $('#switchenVal').val()*1,
        hb: $('#heartbeatVal').val()*1,
 	pos: $('#gpsVal').val()*1,
        div: $('#divVal').val()*1,
        bluetoothPositioningUUID: $('#uuidVal').val(),
        gSensorThreshold: $('#gSensorVal').val()*1,
    }
    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        url: "http://iot.lansitec.com:14211/container/tracker/down/tracker",
        cache: false,
        data: JSON.stringify(data),
        async: true,
        error: function(res) {
            console.log(res)
        },
        success: function(data) {
            document.getElementById("trackerConfiguration").innerHTML = JSON.stringify(data.data)
        }

    })
}

function commandConfiguration() {
    var data = {
        command: $('#CommandVal').val(),
    }
    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        url: "http://iot.lansitec.com:14211/container/tracker/down/command",
        cache: false,
        data: JSON.stringify(data),
        async: true,
        error: function(res) {
            console.log(res)
        },
        success: function(data) {
            document.getElementById("friend").innerHTML = JSON.stringify(data.data)
        }

    })
}


function offlineConfiguration() {
    
    var data = {
        alarmEnable: $('#alarmEnable').val(),
	singleKeyEnable: $('#singleKeyEnable').val(),
	cfmMsg: $('#cfmMsg').val(),
	hbCount: $('#hbCount').val(),
    }
    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        url: "http://iot.lansitec.com:14211/container/tracker/down/offline",
        cache: false,
        data: JSON.stringify(data),
        async: true,
        error: function(res) {
            console.log(res)
        },
        success: function(data) {
            document.getElementById("friendlist").innerHTML = JSON.stringify(data.data)
        }

    })
}

function assetBeaconConfiguration() {
    
    var data = {
        assetBeaconReportPeriod: $('#assetBeaconReportPeriod').val(),
	bluetoothReceivingDuration: $('#bluetoothReceivingDuration').val(),
	extraAssetBeaconReportInterval: $('#extraAssetBeaconReportInterval').val(),
	assetUUID: $('#assetUUID').val(),
    }
    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        url: "http://iot.lansitec.com:14211/container/tracker/down/beacon",
        cache: false,
        data: JSON.stringify(data),
        async: true,
        error: function(res) {
            console.log(res)
        },
        success: function(data) {
            document.getElementById("assetBeaconConfiguration").innerHTML = JSON.stringify(data.data)
        }

    })
}

function shockDetectionReportConfiguration() {
    
    var data = {
        shockDetectionThreshold: $('#shockDetectionThreshold').val(),
	shockPeriod: $('#shockPeriod').val(),
    }
    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        url: "http://iot.lansitec.com:14211/container/tracker/down/shock",
        cache: false,
        data: JSON.stringify(data),
        async: true,
        error: function(res) {
            console.log(res)
        },
        success: function(data) {
            document.getElementById("shockDetectionReportConfiguration").innerHTML = JSON.stringify(data.data)
        }

    })
}

