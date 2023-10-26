import { Type } from "../models";

function TypeConverter() {
    return function (ctr: Function) {
        console.log(ctr, ctr.prototype);
        ctr.prototype.type = new Type(ctr.prototype.typeId);
    }
}

export default TypeConverter;