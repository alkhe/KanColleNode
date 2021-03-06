var socket = io.connect(( typeof SERVER!= 'undefined'
                        ? SERVER
                        : 'http://127.0.0.1:3000'))

socket.on('bind_success', function (data) {
  is_bind_to_admiral = true
})

socket.on('ready_to_bind', function (data) {
  socket.emit('bind_listener', listener_num)
})

socket
  .on('basic_update', function (data) {
    update_basic(data)
    if (!is_bind_to_admiral)
      if (data['mix_id']) {
        socket.emit('bind_listener', {
          'listener_num' : listener_num,
          'mix_id' : data['mix_id']
        })
        globalMixId = data['mix_id']
      }

  })

  .on('fleet_update', function (data) {
    globalFleet = data
    // console.log('[globalFleet]', data)
    updateFleet(data)
  })

  .on('repair_update', function (data) {
    // console.log(data)
    updateRepair(data)
  })

  .on('material_update', function (data) {
    // update_material(data)
  })

  .on('kdock_update', function (data) {
    updateBuild(data)
  })

  .on('day_battle_update', function (data) {
    updateDayBattle(data)
  })

  .on('night_battle_update', function (data) {
    updateNightBattle(data)
  })

  .on('map_start', function (data) {
    mapStart(data)
  })

  .on('clear_battle', function (data) {
    hideBattleInfo()
  })

  .on('map_next', function (data) {
    mapNext(data)
  })

  .on('quest_update', function (data) {
    questUpdate(data)
  })

  .on('day_combined_battle_update', function (data) {
    updateDayBattleCombined(data)
  })

  .on('combined_night_battle_update', function (data) {
    updateNightBattleCombined(data)
  })