import module_SimpleTypeWriter from "./src/simple_type_writer/type_writer.module";
import module_CustomTypeWriter from "./src/custom_type_writer/type_writer.module";

export function CustomTypeWriter() {
    return module_CustomTypeWriter;
}

export default function TypeWriter() {
    return module_SimpleTypeWriter;
}