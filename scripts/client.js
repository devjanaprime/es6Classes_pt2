class Piece{
    constructor( size, framed, artist, year, contents ){
        this.size = size;
        this.framed = framed;
        this.artist = artist;
        this.year = year;
        this.contents = contents;
    } //end constructor
} // end Container

class Landscape{
    constructor( location, landmarks ){
        this.location = location;
        this.landmarks = landmarks;
    } // end 
} // end portrait

class Portrait{
    constructor( subject, features ){
        this.subject = subject;
        this.features = features;
    } // end 
} // end portrait

class Person{
    constructor( firstName, lastName, dateOfBirth ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    } // end 

    name(){
        return this.firstName + ' ' + this.lastName;
    }
} // end portrait

let mona = new Person( 'Mona', 'Lisa', 1503 );
let leo = new Person( 'Leonardo', 'Da Vinci', 1452 );
let monaPainting = new Portrait( mona, [ 'face', 'hands', 'eyes', 'mountains', 'road' ] );
let monaLisa = new Piece( 'big', 'true', leo, 1503, monaPainting );