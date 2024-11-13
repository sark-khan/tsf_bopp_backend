const mongoose = require("mongoose");
// const { WEIGHT, SENSORS, CONDITION, YESNO, ONOFF } = require("../globalConstants");
const Schema = mongoose.Schema;

const DateTimeSchema = new Schema({
    date: { type: Date,  }, // This stores the full date and time.
    time: { type: String,  }, // Alternatively, you could use a separate Date field.
    film_type: { type: String,  },
    l_s: { type: String, default: null },
    o_p: { type: String, default: null }
});

const PersonnelSchema = new Schema({
    shiftIncharge: { type: String,  },
    operator: { type: String,  },
})
const extrudersDetailsSchema = new Schema({
    any_abnormal_sound: { type: Boolean },
    leakage: { type: Boolean },
    remarks: { type: String }
})

const ExtrudersSchema = new Schema({
    main_ext_drive_melt__pump__filter: { type: extrudersDetailsSchema },
    co_ext_1__melt_pump__filter: { type: extrudersDetailsSchema },
    co_ext_2__melt_pump__filter: { type: extrudersDetailsSchema },
    co_ext_3__melt_pump__filter: { type: extrudersDetailsSchema },
    co_ext_4__melt_pump__filter: { type: extrudersDetailsSchema },
    main_vaccum_pressure: { type: Number },
    main_extruder_dome: { type: Number },
    main_ext_cooling_water: {
        temp: { type: Number },
        pressure: { type: Number }
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
})



const dosingScetionSchema = new Schema({
    main_extruder_dust_collector_clean___inside__outside___: { type: String },
    other: { type: String },
    dosing_pipe_condition: { type: String },
    image: [{
        type: String,
    }],
    audio: { type: String },
    video: { type: String }
})

const airKnifeSchema = new Schema({
    pressure: { type: Number },
    speed: { type: Number },
    angle: { degree: { type: Number, o__s: { type: Number }, d__s: { type: Number } } },
    height: { mm: { type: Number }, o__s: { type: Number }, d__s: { type: Number } },
    edge_pinning_pressure: { o__s: { type: Number }, d__s: { type: Number } },
    edge_pinning_towards_air_knife___mm___: { o__s: { type: Number }, d__s: { type: Number } },
    edge_pinning_towards_die___mm___: { o__s: { type: Number }, d__s: { type: Number } },
    pinning_towards_chill_roll___mm___: { o__s: { type: Number }, d__s: { type: Number } },
    air_knife_to_die: { type: String },
    air_knife_to_chill_roll: { type: String },
    image: [{
        type: String,
    }],
    audio: { type: String },
    video: { type: String }
})

const castingSchema = new Schema({
    chill_roll_drying_unit_cylinder_pressure_chill_roll_deposition___400mm____: {
        bar: { type: Number },
        weight: { type: String,  }
    },
    cast_film_drying_unit_roll_120_mm_pressure_deposition: {
        bar: { type: Number },
        weight: { type: String,  }
    },
    chill_roll_edge_nozzle_pressure: { type: Number },
    chill_roll_pump_pressure: { type: Number },
    water_bath_pump_pressure: {
        m__bar: { type: Number },
        sensor: { type: String }
    },
    water_bath_skim_tank_level: { type: String },
    water_bath_tds_level: { type: Number },
    die_melt_leakage_from_end_plates_of_gasket: { type: String },
    die_exhasut_fan: { type: String },
    die_lip_deposition: { type: String,  },
    presence_of_die_line_in_cast_film: { type: String },
    water_observed_in_cast_film: { type: String },
    cast_film___l___: { type: Number },
    cast_film___c___: { type: Number },
    cast_film___r___: { type: Number },
    cast_film_width: { type: Number },
    mono_cast_film_width: { type: Number },
    others1: { type: String },
    others2: { type: String },
    others3: { type: String },
    others4: { type: String },
    image: [{
        type: String,
    }],
    audio: { type: String },
    video: { type: String }

})


const mdoSchema = new Schema({
    mdo_stretching_gap_position: {
        mm: { type: Number },
        _2: { type: Number },
        _3: { type: Number },
    },
    mdo_threading_chain_condition: { type: String },
    any_leakage_mdo_rolls__rotary_union: { condition: { type: String }, remarks: { type: String } },
    mdo_nip_roll_pressure_condition___values_in_bar___: {
        "1": { type: Number },
        "2.1/2": { type: Number },
        "2.2/3": { type: Number },
        "3.1/4": { type: Number },
        "3.2/5": { type: Number },
        "4.1/6": { type: Number },
        "4.2/7": { type: Number },
        "5/8": { type: Number },
        "6/9": { type: Number },
        "7/10": { type: Number },
        "8/11": { type: Number },
        outlet: { type: Number }
    },
    other1: { type: String },
    other2: { type: String },
    other3: { type: String },
    image: [{ type: String }]
});

const tdoSchema = new Schema({
    inlet_guide_roll_ok_o__s: { type: String},
    inlet_guide_roll_ok_d__s: { type: String},  // TDO INLET GUIDE ROLL OK(Y/N)
    epc_jaw_position: {
        os_h: { type: Number },
        ds_h: { type: Number },
        os_d: { type: Number },
        ds_d: { type: Number }
    },
    tdo_clips_condition: {
        o__s: { type: String },
        d__s: { type: String }
    },
    tdo_edge_cooling: { condition: { type: String }, percentage: { type: Number } },
    tdo_chain_temp: {
        o__s: { type: Number },
        d__s: { type: Number },
        o__s_2: { type: Number },
        d__s_2: { type: Number }
    },
    heat_recovery_cooling_zone_filter_condition: { type: String },
    tdo_external_airing: {
        flow: { type: Number },
        output_percentage: { type: Number },
        temp: { type: Number }
    },
    tdo_spindle_position: {
        "1": { type: Number },
        "2": { type: Number },
        "3": { type: Number },
        "4": { type: Number },
        "5": { type: Number },
        "6": { type: Number },
        "7": { type: Number },
        "8": { type: Number },
        "9": { type: Number },
        "10": { type: Number },
        "11": { type: Number },
        "12": { type: Number },
        "13": { type: Number },
        "14": { type: Number },
        "15": { type: Number },
        "16": { type: Number },
        "17": { type: Number },
        "18": { type: Number }
    },
    tdo_chain_torque: {
        os_percentage: { type: Number },
        ds_percentage: { type: Number }
    },
    tdo_chain_track_temp_cooling_temp: {
        os: [
            { temp: { type: Number } }
        ],
        ds: [
            { temp: { type: Number } }
        ]
    },
    total_trim_percentage: { o__s_percentage: { type: Number }, d__s_percentage: { type: Number } },
    gripping: { o__s: { type: Number }, d__s: { type: Number } },
    trim_unstretch_portion: { o__s: { type: Number }, d__s: { type: Number } },
    other1: { type: String },
    other2: { type: String },
    other3: { type: String },
    other4: { type: String },
    image: [{
        type: String
    }],
    audio: { type: String },
    video: { type: String }
});


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
        bottom: { type: Number },
        top: { type: Number }
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
});

const winderSchema = new Schema({
    spreader_roll_condition: {
        "1": { type: String },
        "2": { type: String },
        "3": { type: String },
        "4": { type: String }
    },
    winding_parameter: {
        winder1: {
            tension: { type: Number },
            pressure: { type: Number }
        },
        winder2: {
            tension: { type: Number },
            pressure: { type: Number }
        }
    },
    winder_pit_cleaned: { type: String },  // Dropdown with options for cleaned status
    scrap_tension: {
        winder1: { type: Number },
        winder2: { type: Number }
    },
    turning_tension: {
        winder1: { type: Number },
        winder2: { type: Number }
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
});

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
});



const boppFormDataSchema = new Schema(
    {
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
