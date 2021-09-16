import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";


const productos = [
    {
        id: "1",
        nombre: "inter",
        url: "https://i.ibb.co/dgjzjvK/images-q-tbn-ANd9-Gc-TUtrjy-hxo-S7itymm994-PWb1-o-SLUZMo38-Fg-usqp-CAU.jpg",
        tipo: "camisetas",
        precio: 2000

    },
    {
        id: "2",
        nombre: "defensa y justicia",
        url: "https://i.ibb.co/WBzHNLv/images-q-tbn-ANd9-Gc-Rxu-I5t-AXdtt-Izamd-RH9-AMzkt-WTbk-Opk-TRk-Jg-usqp-CAU.jpg",
        tipo: "camisetas",
        precio: 1500

    },
    {
        id: "3",
        nombre: "atletico madrid",
        url: "https://i.ibb.co/Z2zDQ6y/images-q-tbn-ANd9-Gc-Re-FPQu-FEjev-D6-YS2-NTIug-Fx-X-fsjkr-Jucp-BQ-usqp-CAU.jpg",
        tipo: "camisetas",
        precio: 2500

    },
    {
        id: "4",
        nombre: "boca",
        url: "https://i.ibb.co/cgsvGpL/images-q-tbn-ANd9-Gc-RYp-WVv-PP3-SU9-C-s1cxww-4v-F9ea-CYd-Eg8lpg-usqp-CAU.jpg",
        tipo: "camisetas",
        precio: 2000

    },
    {
        id: "5",
        nombre: "psg",
        url: "https://i.ibb.co/52DSLcg/images-q-tbn-ANd9-Gc-Til-RUA4u4-VPSO2stk-XFd-Lkd-Ufey-Pw-A6-VOYpn-N-JUJvoqsqr-BG1-Nb-TPbsl-JYy-Uk-Re.jpg",
        tipo: "camisetas",
        precio: 3000

    },
    {
        id: "6",
        nombre: "real madrid",
        url: "https://i.ibb.co/zhSGT73/images-q-tbn-ANd9-Gc-RBw-Tp-Kj-J-uwdb34-Wz-Wc-H-bjy-ASQm-X5li-LGb-Q-usqp-CAU.jpg",
        tipo: "camisetas",
        precio: 2800

    },
    {
        id: "7",
        nombre: "buzo boca",
        url: "https://i.ibb.co/RHY1gvK/images-q-tbn-ANd9-Gc-TEIij-Rh-Dbdw0w-Sg-Qp-SJr-UQw-Ktuvv7-WXFVWpg-Thxh3-TKb-Yuc-Pupy-Kon-T9-q-Sqpcp6.jpg",
        tipo: "buzos",
        precio: 4000

    },
    {
        id: "8",
        nombre: "buzo bayern",
        url: "https://i.ibb.co/n8mx8dF/images-q-tbn-ANd9-Gc-R4-Do0c-UTRx-UYCr1-FJl4-OWR-v-Tbvu2-Jm3-R24-Q-usqp-CAU.jpg",
        tipo: "buzos",
        precio: 4200

    },
    {
        id: "9",
        nombre: "buzo velez",
        url: "https://i.ibb.co/nMRbmC1/images-q-tbn-ANd9-Gc-Skjv-K1-N84d-Ng4n-KGwr-F8y-Yzdr-Hf-W-131-A82w-usqp-CAU.jpg",
        tipo: "buzos",
        precio: 3500

    },
    {
        id: "10",
        nombre: "campera chacarita",
        url: "https://i.ibb.co/0GvW6Dn/images-q-tbn-ANd9-Gc-To8-Zvhotm2z78h-FB5-l-U-cj-RAi91-Cj-Anp-Ga-Q-usqp-CAU.jpg",
        tipo: "camperas",
        precio: 4600

    },
    {
        id: "11",
        nombre: "campera boca",
        url: "https://i.ibb.co/JzRXY1N/images-q-tbn-ANd9-Gc-RQk-MLJP1-B9t8-Ab-L-BW28-Z3kd-FXgv-Tw-Ox8gg-usqp-CAU.jpg",
        tipo: "camperas",
        precio: 5000

    },
    {
        id: "12",
        nombre: "campera colon",
        url: "https://i.ibb.co/3vGHG0v/images-q-tbn-ANd9-Gc-TNJ9-Kg-In-Q5-O2-YRTT-5y-NXC1-BH24gmp-KJjbg-usqp-CAU.jpg",
        tipo: "camperas",
        precio: 4600

    },
    {
        id: "13",
        nombre: "campera ferro",
        url: "https://i.ibb.co/5s19dpn/images-q-tbn-ANd9-Gc-TBOMZGVi5-HTr-Dv-Ppt-VZkkc-TSuoga2-BHHLIn-A-usqp-CAU.jpg",
        tipo: "camperas",
        precio: 4100

    }

]



const getProductos = new Promise((res) => {
    setTimeout(() => {
        res(productos)
    }, 2000);
})


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        getProductos
            .then((resp) => {
                 
                let prueba=resp.find(e=>e.id==='5')
                
                setProducto(prueba);
            })
            .catch(err => console.log(err))

    }, []);
    
    return (
        <>
           <ItemDetail obj={producto}/>
        </>

    )
}

export default ItemDetailContainer