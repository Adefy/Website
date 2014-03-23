loadAd = (options) ->

  loadSource options.logic, (adLogic) ->
    loadSource options.manifest, (adManifest) ->
      loadSource options.editorLogic, (editorLogic) ->

        adEditor = ace.edit options.adEditor
        adEditor.setValue adLogic
        adEditor.gotoLine 1

        $(options.parentDiv).html ""
        AJS._initialized = false

        canvasDiv = options.parentDiv.split("#").join ""

        (->
          eval """
            var width = #{options.width};
            var height = #{options.height};

            #{adManifest}

            AJS.init(function() {
              AJS.loadManifest(textures, function() {
                #{adLogic}
              });
            }, #{options.width}, #{options.height}, "#{canvasDiv}");
          """
        )()

loadSource = (path, cb) ->
  return cb() if path == undefined or path == null

  $.ajax
    url: path
    dataType: "text"
    success: (src) ->
      cb src
