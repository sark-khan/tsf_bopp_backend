const STATUS_CODES = {
    BAD_REQUEST: 400,
    CONFLICT: 409,
    CREATED: 201,
    NOT_ACCEPTABLE: 406,
    NOT_AUTHENTICATED: 401,
    NOT_AUTHORIZED: 403,
    NOT_FOUND: 404,
    OK: 200,
    RESOURCE_CREATED: 201,
    SERVER_ERROR: 500,
    TOO_MANY_REQUESTS: 429,
};
const ROLES = {
    EMPLOYEE: "Employee",
    ADMIN: "Admin",
};



const YESNO = {
    YES: "YES",
    NO: "NO",
    NULL:null,
    EMPTY:''
}

const WEIGHT={
    LIGHT:"LIGHT",
    HEAVY:"HEAVY",
    NO: "NO",
    NULL:null,
    EMPTY:''
}
const SENSORS={
    SENSOR:"Sensor",
    SENSOR_PRESSURE:"Sensor Pressure",
    NULL:null,
    EMPTY:''
}
const CONDITION={
    OK:"OK",
    NOT_OK:"NOT OK",
    NULL:null,
    EMPTY:''
}
const ONOFF={
    ON:"ON",
    OFF:"OFF",
    NULL:null,
    EMPTY:''
}

module.exports={
    YESNO,
    ROLES,
    STATUS_CODES,
    WEIGHT,
    CONDITION,
    SENSORS,
    ONOFF,
    STATUS_CODES
}