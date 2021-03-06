var io = null
  , gameData = require('../game-data')
  , async = require('async')
  , replacement = {}

replacement.equipment = { "api_id": 'id'
                        , "api_houg": 'firepower'
                        , "api_leng": 'range'
                        , "api_houk": 'evasion'
                        , "api_raig": 'tropedo'
                        , "api_houm": 'accuracy'
                        , "api_tyku": 'anti_air'
                        , "api_souk": 'armor'
                        , "api_saku": 'tracking'
                        , "api_name": 'name'
                        , "api_luck": 'luck'
                        , "api_tais": 'anti_submarine'
                        , "api_baku": 'bomb'
                        , 'api_type': 'type'
                        }

replacement.ships = { 'api_name': 'name'
                    , 'api_stype': 'type'
                    , 'api_yomi': 'yomi'
                    , 'api_afterlv': 'afterlv'
                    , 'api_id': 'id'
                    , 'api_soku': 'speed'
                    }

replacement.shipTypes = { 'api_name': 'name'
                        , 'api_id': 'id'
                        }
                           
replacement.expeditions = { 'api_name': 'name'
                          , 'api_id': 'id'
                          }

replacement.equipmentType = { 'api_name': 'name'
                            , 'api_id': 'id'
                            }

function gameStart (req, data, admiral) {
  loadMaster('ships', data.api_mst_ship)
  loadMaster('shipTypes', data.api_mst_stype)
  loadMaster('expeditions', data.api_mst_mission)
  loadMaster('equipment', data.api_mst_slotitem)
  loadMaster('equipmentType', data.api_mst_slotitem_equiptype, groupEquipment)
}

function groupEquipment (equipType) {
  equipType.plane = [6, 7, 8, 9, 10, 11]
  equipType.battle_plane = [6, 7, 8, 11]
  equipType.radar = [12, 13]
}

function loadMaster (category, data, addition) {
  gameData[category] = {}
  var newKey = replacement[category]
  for (var i in data) {
    var temp = {}
    for (var key in newKey)
      temp[newKey[key]] = data[i][key]
    gameData[category][data[i].api_id] = temp
  }
  if (typeof addition == 'function')
    addition(gameData[category])
  gameData.store(category)
}

module.exports.handler = function (socket) {
  io = socket
  return gameStart
}

module.exports.api = ['/api_start2']
