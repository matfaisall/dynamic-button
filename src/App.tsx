import { Trash } from "@phosphor-icons/react";
import "./App.css";

import Button from "./components/shared/Button";

/**
 * 
  1. Dinamis background dengan setidaknya 3 warna. ✅
  2. Dapat memiliki ikon atau tidak. ✅
  3. Posisi ikon dapat diatur di sebelah kanan atau kiri label. ✅
  4. Ukuran, background, dan jenis ikon dapat diatur sebagai parameter saat memanggil komponen tersebut. ✅
  5. Button harus memiliki setidaknya 3 ukuran. ✅
  6. Button dapat memiliki tooltip atau tidak. ✅
  7. Posisi tooltip dapat diatur di atas, bawah, kanan, dan kiri.
  8. Menggunakan Typescript. ✅
 * 
 */

function App() {
  return (
    <Button
      icon={<Trash size={22} color="white" />}
      startIcon
      color="#FFF"
      backgroundColor="green"
      size="large"
      onClick={() => console.log("button clicked")}
      tooltip="Remove This Item"
      tooltipPosition="bottom"
    >
      Move to Trash
    </Button>
  );
}

export default App;
