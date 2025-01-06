const mongoose = require("mongoose");
// const { WEIGHT, SENSORS, CONDITION, YESNO, ONOFF } = require("pointpoint/globalConstants");
const Schema = mongoose.Schema;


const DateTimeSchema = new Schema({
    date: { type: Date,  }, // This stores the full date and timepoint
    time: { type: String,  }, // Alternatively, you could use a separate Date fieldpoint
    film_type: { type: String,  },
    l_s: { type: String, default: null },
    o_p: { type: String, default: null }
}, { _id: false });

const PersonnelSchema = new Schema({
    shiftIncharge: { type: String,  },
    operator: { type: String,  },
}, { _id: false })
const extrudersDetailsSchema = new Schema({
    any_abnormal_sound_yes: { type: Boolean },
    any_abnormal_sound_no: { type: Boolean },
    leakage_no: { type: Boolean },
    leakage_yes: { type: Boolean },
    remarks: { type: String }
}, { _id: false })

const ExtrudersSchema = new Schema({
    main_ext_drive_melt__pump__filter: { type: extrudersDetailsSchema },
    co_ext_1__melt_pump__filter: { type: extrudersDetailsSchema },
    co_ext_2__melt_pump__filter: { type: extrudersDetailsSchema },
    co_ext_3__melt_pump__filter: { type: extrudersDetailsSchema },
    co_ext_4__melt_pump__filter: { type: extrudersDetailsSchema },
    main_vaccum_pressure: { type: String },
    main_extruder_dome: { type: String },
    main_ext_cooling_water: {
        temp: { type: String },
        pressure: { type: String }
    },
    co_ext_1: { type: String },
    co_ext_2: { type: String },
    co_ext_3: { type: String },
    co_ext_4: { type: String },
    others1: { type: String },
    others2: { type: String },
    others3: { type: String },
    others4: { type: String },
    image: [{
        type: String,
    }],
    audio: { type: String },
    video: { type: String }
}, { _id: false })



const dosingScetionSchema = new Schema({
    main_extruder_dust_collector_clean___inside__outside___: { type: String },
    other: { type: String },
    dosing_pipe_condition: { type: String },
    image: [{
        type: String,
    }],
    audio: { type: String },
    video: { type: String }
}, { _id: false })

const airKnifeSchema = new Schema({
    pressure: { type: String },
    speed: { type: String },
    angle: { degree: { type: String, o__s: { type: String }, d__s: { type: String } } },
    height: { mm: { type: String }, o__s: { type: String }, d__s: { type: String } },
    edge_pinning_pressure: { o__s: { type: String }, d__s: { type: String } },
    edge_pinning_towards_air_knife___mm___: { o__s: { type: String }, d__s: { type: String } },
    edge_pinning_towards_die___mm___: { o__s: { type: String }, d__s: { type: String } },
    pinning_towards_chill_roll___mm___: { o__s: { type: String }, d__s: { type: String } },
    air_knife_to_die: { type: String },
    air_knife_to_chill_roll: { type: String },
    image: [{
        type: String,
    }],
    audio: { type: String },
    video: { type: String }
}, { _id: false })

const castingSchema = new Schema({
    chill_roll_drying_unit_cylinder_pressure_chill_roll_deposition___400mm____: {
        bar: { type: String },
        weight: { type: String,  }
    },
    cast_film_drying_unit_roll_120_mm_pressure_deposition: {
        bar: { type: String },
        weight: { type: String,  }
    },
    chill_roll_edge_nozzle_pressure: { type: String },
    chill_roll_pump_pressure: { type: String },
    water_bath_pump_pressure: {
        m__bar: { type: String },
        sensor: { type: String }
    },
    water_bath_skim_tank_level: { type: String },
    water_bath_tds_level: { type: String },
    die_melt_leakage_from_end_plates_of_gasket: { type: String },
    die_exhaust_fan: { type: String },
    die_lip_deposition: { type: String,  },
    presence_of_die_line_in_cast_film: { type: String },
    water_observed_in_cast_film: { type: String },
    cast_film___l___: { type: String },
    cast_film___c___: { type: String },
    cast_film___r___: { type: String },
    cast_film_width: { type: String },
    mono_cast_film_width: { type: String },
    others1: { type: String },
    others2: { type: String },
    others3: { type: String },
    others4: { type: String },
    image: [{
        type: String,
    }],
    audio: { type: String },
    video: { type: String }

}, { _id: false })


const mdoSchema = new Schema({
    mdo_inlet__ilc_load_cell_value:{type:String},
    mdo_stretching_gap_position: {
        mm: { type: String },
        _2: { type: String },
        _3: { type: String },
    },
    mdo_threading_chain_condition: { type: String },
    any_leakage_mdo_rolls__rotary_union: { condition: { type: String }, remarks: { type: String } },
    mdo_nip_roll_pressure_condition___values_in_bar___: {
        "1": { type: String },
        "2point1by2": { type: String },
        "2point2by3": { type: String },
        "3point1by4": { type: String },
        "3point2by5": { type: String },
        "4point1by6": { type: String },
        "4point2by7": { type: String },
        "5by8": { type: String },
        "6by9": { type: String },
        "7by10": { type: String },
        "8by11": { type: String },
        outlet: { type: String }
    },
    other1: { type: String },
    other2: { type: String },
    other3: { type: String },
    image: [{ type: String }]
}, { _id: false });

const tdoSchema = new Schema({
    inlet_guide_roll_ok_o__s: { type: String},
    inlet_guide_roll_ok_d__s: { type: String},  // TDO INLET GUIDE ROLL OK(Y/N)
    epc_jaw_position: {
        os_h: { type: String },
        ds_h: { type: String },
        os_d: { type: String },
        ds_d: { type: String }
    },
    tdo_clips_condition: {
        o__s: { type: String },
        d__s: { type: String }
    },
    tdo_edge_cooling: { condition: { type: String }, percentage: { type: String } },
    tdo_chain_temp: {
        o__s: { type: String },
        d__s: { type: String },
        o__s_2: { type: String },
        d__s_2: { type: String }
    },
    heat_recovery_cooling_zone_filter_condition: { type: String },
    tdo_external_airing: {
        flow: { type: String },
        output_percentage: { type: String },
        temp: { type: String }
    },
    tdo_spindle_position: {
        "1": { type: String },
        "2": { type: String },
        "3": { type: String },
        "4": { type: String },
        "5": { type: String },
        "6": { type: String },
        "7": { type: String },
        "8": { type: String },
        "9": { type: String },
        "10": { type: String },
        "11": { type: String },
        "12": { type: String },
        "13": { type: String },
        "14": { type: String },
        "15": { type: String },
        "16": { type: String },
        "17": { type: String },
        "18": { type: String }
    },
    tdo_chain_torque: {
        os_percentage: { type: String },
        ds_percentage: { type: String }
    },
    tdo_chain_track_temp_cooling_temp: {
        os: [
            { temp: { type: String } }
        ],
        ds: [
            { temp: { type: String } }
        ]
    },
    total_trim_percentage: { o__s_percentage: { type: String }, d__s_percentage: { type: String } },
    gripping: { o__s: { type: String }, d__s: { type: String } },
    trim_unstretch_portion: { o__s: { type: String }, d__s: { type: String } },
    other1: { type: String },
    other2: { type: String },
    other3: { type: String },
    other4: { type: String },
    image: [{
        type: String
    }],
    audio: { type: String },
    video: { type: String }
}, { _id: false });


const prsSchema = new Schema({
    spreader_roll_condition: {
        o_s: {
            "1": { type: String },
            "2": { type: String },
            "3": { type: String },
            "4": { type: String },
            "5": { type: String },
            "6": { type: String }
        },
        d_s: {
            "1": { type: String },
            "2": { type: String },
            "3": { type: String },
            "4": { type: String },
            "5": { type: String },
            "6": { type: String }
        }
    },
    types_of_blades: { type: String },
    blades_condition: { type: String },
    scanner_healthiness: { type: String },
    prs_nip_roll_pressure: {
        bottom: { type: String },
        top: { type: String }
    },
    prs_top_corona_nip_roll_mech_breaker_position: {
        o_s: { type: String },
        d_s: { type: String }
    },
    prs_bottom_corona_nip_roll_mech_breaker_position: {
        o_s: { type: String },
        d_s: { type: String }
    },
    part_nip_roll_condition: {
        os: { type: String },
        ds: { type: String }
    },
    edge_chopper_guide_roll: {
        os: { type: String },
        ds: { type: String }
    },
    corona_exhaust_pipes_condition: { type: String },
    other1: { type: String },
    other2: { type: String },
    other3: { type: String },
    other4: { type: String },
    image: [{
        type: String
    }],
    audio: { type: String },
    video: { type: String }
}, { _id: false });

const winderSchema = new Schema({
    spreader_roll_condition: {
        "1": { type: String },
        "2": { type: String },
        "3": { type: String },
        "4": { type: String }
    },
    winding_parameter: {
        winder1: {
            tension: { type: String },
            pressure: { type: String }
        },
        winder2: {
            tension: { type: String },
            pressure: { type: String }
        }
    },
    winder_pit_cleaned: { type: String },  // Dropdown with options for cleaned status
    scrap_tension: {
        winder1: { type: String },
        winder2: { type: String }
    },
    turning_tension: {
        winder1: { type: String },
        winder2: { type: String }
    },
    other1: { type: String },
    other2: { type: String },
    other3: { type: String },
    other4: { type: String },
    image: [{
        type: String
    }],
    audio: { type: String },
    video: { type: String }
}, { _id: false });

const visualPhysicalDefectsSchema = new Schema({
    cast_film: {
        condition: { type: String },
        remarks: { type: String }
    },
    mono_film: {
        condition: { type: String },
        remarks: { type: String }
    },
    final_film: { type: String },  // Text field for entering remarks
    eot_crane_wire_rope_condition: { type: String },  // Dropdown for crane & wire rope condition
    paper_cores_scrap_winder: { type: String },  // Dropdown for paper cores condition
    cleaning_items_on_place: { type: String },  // Dropdown for cleaning items condition
    building_exhaust_blowers: { type: String },  // Dropdown for exhaust blowers condition
    other1: { type: String },
    other2: { type: String },
    other3: { type: String },
    other4: { type: String },
    other5: { type: String },
    other6: { type: String },
    other7: { type: String },
    other8: { type: String },
    image: [{
        type: String
    }],
    audio: { type: String },
    video: { type: String }
}, { _id: false });



const boppFormDataSchema = new Schema(
    {
        organization: {type: String, },
        dateObj: { type: DateTimeSchema },
        personnelObj: { type: PersonnelSchema},
        extrudersObj: { type: ExtrudersSchema },
        dosingScetion: { type: dosingScetionSchema },
        airKnife: { type: airKnifeSchema },
        castingUnit: { type: castingSchema },
        mdo: { type: mdoSchema },
        tdo: { type: tdoSchema },
        prs: { type: prsSchema },
        winder: { type: winderSchema },
        visualPhysicalDefects: { type: visualPhysicalDefectsSchema }


    },
    { timestamps: true }
);


module.exports = mongoose.model("BoppForm", boppFormDataSchema);
