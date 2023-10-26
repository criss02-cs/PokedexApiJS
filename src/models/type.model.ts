export class Type {
    id: string;

    constructor(id: string) {
        this.id = id;
    }    

    equals(other: Type): boolean {
        return this.id === other.id;
    }

    public static Normale = new Type("652d03ffec594fc5b8a0248a");
    public static Lotta = new Type("652d0400ec594fc5b8a0248b");
    public static Volante = new Type("652d0400ec594fc5b8a0248c");
    public static Veleno = new Type("652d0400ec594fc5b8a0248d");
    public static Terra = new Type("652d0401ec594fc5b8a0248e");
    public static Roccia = new Type("652d0401ec594fc5b8a0248f");
    public static Coleottero = new Type("652d0401ec594fc5b8a02490");
    public static Spettro = new Type("652d0401ec594fc5b8a02491");
    public static Acciaio = new Type("652d0402ec594fc5b8a02492");
    public static Fuoco = new Type("652d0402ec594fc5b8a02493");
    public static Acqua = new Type("652d0402ec594fc5b8a02494");
    public static Erba = new Type("652d0402ec594fc5b8a02495");
    public static Elettro = new Type("652d0402ec594fc5b8a02496");
    public static Psico = new Type("652d0402ec594fc5b8a02497");
    public static Ghiacchio = new Type("652d0403ec594fc5b8a02498");
    public static Drago = new Type("652d0403ec594fc5b8a02499");
    public static Buio = new Type("652d0403ec594fc5b8a0249a");
    public static Folletto = new Type("652d0404ec594fc5b8a0249b");
}