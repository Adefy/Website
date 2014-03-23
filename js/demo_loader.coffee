loadAd = (options) ->

  $.ajax
    url: options.logic
    dataType: "text"
    success: (adData) ->

      adEditor = ace.edit options.adEditor
      adEditor.setValue adData

      $.ajax
        url: options.manifest
        dataType: "text"
        success: (manifestData) ->

          $(options.parentDiv).html ""
          AJS._initialized = false

          canvasDiv = options.parentDiv.split("#").join ""

          (->
            eval """
              #{manifestData}

              AJS.init(function() {
                AJS.loadManifest(textures, function() {
                  #{adData}
                });
              }, #{options.width}, #{options.height}, "#{canvasDiv}");
            """
          )()

          adEditor.gotoLine 1
