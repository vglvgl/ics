var url = 'https://ics-api.herokuapp.com/ics';
var id = 1;

$().ready(function() {
    axios.get(`${url}/${id}`)
        .then ( response => {
            load(response.data)
        } ).catch( err => {
            console.log(err)
        } );
});

function get_info(num){
    axios.get(`${url}/${num}`)
    .then ( response => {
        load(response.data)
    } ).catch( err => {
        console.log(err)
    } );
}

function load(response){
    $( '.char' ).text(response.char);
    $( '.name' ).text(response.name);
    $( '.pron' ).text(response.pronunciation);
    $( '.meaning' ).text(response.meaning);
    if (response.id < 27) $( '.flag' ).html('<img src="'+response.flag+'" alt="'+response.name+'" height="140" width="140">');
    else $( '.flag' ).html('<img src="'+response.flag+'" alt="'+response.name+'" height="100" width="180">');
    $( '.morse' ).text(response.morse);
    if (response.audio != "") $( '.audio' ).html('<audio controls><source src="'+response.audio+'" type="audio/mpeg"></audio>');
    else $( '.audio' ).html('');
}
