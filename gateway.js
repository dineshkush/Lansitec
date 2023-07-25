function uplinkMessageSearch() {
    var data = {
	payload:$('#payloadVal').val(),
     }


    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        //url: "https://dev.lansitec.com:8100/api/gatewayDataAnalysis",
	url: "http://iot.lansitec.com:14211/rule/gateway/up",
        cache: false,
        data: JSON.stringify(data),
        async: true,
        error: function(res) {
            document.getElementById("uplinkMessage").innerHTML = ''
            document.getElementById("uplinkMessage").innerHTML = JSON.stringify(res.responseText)
        },
        success: function(data) {
            document.getElementById("uplinkMessage").innerHTML = JSON.stringify(data.data).replace(/,/g,",\n")
        }
    })
}

function registerAcceptanceSearch() {
    var data = {
        result: $('#resultVal').val()
    }
    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
	url: "http://iot.lansitec.com:14211/rule/gateway/down/register",
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
	url: "http://iot.lansitec.com:14211/rule/gateway/down/lora",
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
        pos: $('#gpsVal').val()*1,
        hb: $('#heartbeatVal').val()*1,
    }
    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        url: "http://iot.lansitec.com:14211/rule/gateway/down/gateway",
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

function checkCommand() {
    var modeVal = $('#CommandVal  option:selected').val();
    if (modeVal>4) {
        document.getElementById("payloadVal2").disabled="";;
    }else{
        document.getElementById("payloadVal2").disabled="disabled";;
    }
}

function acknowledgeSearch() {
    let msgId = $('#msgIdVal2').val()
    if (msgId < 0 || msgId > 255 || isNaN(msgId)) {
        document.getElementById("acknowledge").innerHTML = "Parameter invalid"
        return
    }
    let calculated = '"' + 'F0' + (Array(2).join('0') + Number(msgId).toString(16)).slice(-2) + '"'
    document.getElementById("acknowledge").innerHTML = calculated.toUpperCase()
}

function commandConfiguration() {
    var data = {
        command: $('#CommandVal').val(),
        msgId: $('#msgIdVal3').val(),
        value: $('#payloadVal2').val(),

        beaconTypes: $('#beaconTypes').val(),
        ruleNumber: $('#ruleNumber').val(),
        ruleType: $('#ruleType').val(),
        startAddress: $('#startAddress').val(),
        endAddress: $('#endAddress').val(),
        data: $('#data').val(),
    }
    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        url: "http://iot.lansitec.com:14211/rule/gateway/down/command",
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