var express = require('express');
var router = express.Router();

//var crudCtrl = require('../controllers/crud');
var rol = require('../controllers/rol');

//rol 
router.post( '/rol' ,rol.CrearUbicacion );
router.post( '/rol/:rolid' ,rol.ActualizarUbicacion );
router.get( '/rol' ,rol.getTodos );
router.get( '/rol/basurero' ,rol.getBasurero );
router.get( '/rol/camion' ,rol.getCamion );

module.exports = router;
