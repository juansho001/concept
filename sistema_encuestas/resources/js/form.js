$(document).ready(function() {
    readJson('resources/json/form.json');
});

function readJson(json) {
    $.getJSON(json, function(encuesta) {
            getContenedorEncuesta().append(getInfoEncuesta(encuesta.titulo, encuesta.descripcion));
            getContenedorEncuesta().append(adicionarFormulario(encuesta.id, encuesta.controlador, encuesta.metodo));
            $.each(encuesta.preguntas, function(key, val) {
                getFormulario(encuesta.id).append(adicionarPregunta(encuesta, val));
            });
            getFormulario(encuesta.id).append(adicionarBotones());
        })
        .done(function() {
            console.log("Se completo el proceso");
        })
        .fail(function() {
            getContenedorEncuesta().append(getTituloEncuesta('Se presento un error al cargar la encuesta'));
        });
}

function getContenedorEncuesta() {
    return $("#col-encuesta");
}

function getInfoEncuesta(titulo, descripcion) {
    str = '<div class="jumbotron" id="detalle-encuesta">';
    str += getTituloEncuesta(titulo);
    str += getDescripcionEncuesta(descripcion);
    str += '</div>'
    return str;
}

function getTituloEncuesta(titulo) {
    return '<h1 class="text-center">' + titulo + '</h1>';
}

function getDescripcionEncuesta(descripcion) {
    return '<p class="lead">' + descripcion + '</p>';
}

function adicionarFormulario(id, controlador, metodo) {
    return '<form id="' + id + '" action="' + controlador + '" method="' + metodo + '"></form>';
}

function getFormulario(id) {
    return $("#" + id);
}

function adicionarPregunta(encuesta, pregunta) {
    str = '<div class="form-group">';
    str += getDescripcionPregunta(pregunta.pregunta);
    str += getElementoPregunta(pregunta);
    str += '</div>';
    return str;
}

function getElementoPregunta(pregunta) {
    if (pregunta.metadata.id == 'input') {
        return getInputText(pregunta.id, pregunta.requerido);
    } else if (pregunta.metadata.id == 'textarea') {
        return getTextarea(pregunta.id);
    } else if (pregunta.metadata.id == 'select') {
        return getSelect(pregunta.id, pregunta.itempreguntas);
    } else if (pregunta.metadata.id == 'radio') {
        return getRadioButton(pregunta.id, pregunta.itempreguntas);
    } else if (pregunta.metadata.id == 'checkbox') {
        return getCheckBox(pregunta.id, pregunta.itempreguntas);
    }
}

function getDescripcionPregunta(texto) {
    return '<p class="bs-callout bs-callout-info">' + texto + '</p>';
}

function getInputText(id, requerido) {
    if (requerido) {
        return '<input id"' + id + '" class="form-control" type="text" name="' + id + '" required>';
    }
    return '<input id="' + id + '" class="form-control" type="text" name="' + id + '">';
}

function getTextarea(id) {
    return '<textarea id="' + id + '" name="' + id + '" class="form-control" rows="3"> </textarea>';
}

function getSelect(id, opciones) {
    str = '<select id="' + id + '" class="form-control" >';
    $.each(opciones, function(key, val) {
        str += '<option value="' + val.id + '">' + val.valor + '</option>'
    });
    str += '<select>';
    return str;
}

function getRadioButton(id, opciones) {
    return construirElementosMultiples('radio', id, opciones);
}

function getCheckBox(id, opciones) {
    return construirElementosMultiples('checkbox', id, opciones);
}

function construirElementosMultiples(tipo, id, opciones) {
    str = "";
    $.each(opciones, function(key, val) {
        str += '<input type="' + tipo + '" name="' + id + '" value="' + val.id + '">' + val.valor + '<br/>';
    });
    return str;
}

function adicionarBotones() {
    str = '<div class="btn-control">'
    str += getSubmit();
    str += getCancel();
    str += '</div>';
    return str;
}

function getSubmit() {
    return '<button type="submit" class="btn btn-primary separar">Enviar</button>';
}

function getCancel() {
    return '<button type="reset" class="btn btn-danger">Cancel</button>';
}