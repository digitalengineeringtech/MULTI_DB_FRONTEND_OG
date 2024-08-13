import React, { useEffect, useState } from "react";
import "./table.css";

function CategoryTable({
  okData,
  tableRef,
  startDate,
  endDate,
  single,
  language,
}) {
  const [cyclePremium, SetcyclePremium] = useState(0);
  const [cycleDiesel, SetcycleDiesel] = useState(0);
  const [cycle92, setcycle92] = useState(0);
  const [cycle95, setcycle95] = useState(0);
  const [cyclecount, Setcyclecount] = useState(0);
  const [cyclePremiumCount, SetcyclePremiumCount] = useState(0);
  const [cycleDieselCount, SetcycleDieselCount] = useState(0);
  const [cycle92Count, setcycle92Count] = useState(0);
  const [cycle95Count, setcycle95Count] = useState(0);
  const [cycleTotal, setcycleTotalPrice] = useState(0);

  const [cycle3Premium, Setcycle3Premium] = useState(0);
  const [cycle3Diesel, Setcycle3Diesel] = useState(0);
  const [cycle392, setcycle392] = useState(0);
  const [cycle395, setcycle395] = useState(0);
  const [cycle3count, Setcycle3count] = useState(0);
  const [cycle3PremiumCount, Setcycle3PremiumCount] = useState(0);
  const [cycle3DieselCount, Setcycle3DieselCount] = useState(0);
  const [cycle392Count, setcycle392Count] = useState(0);
  const [cycle395Count, setcycle395Count] = useState(0);
  const [cycle3TotalPrice, setcycle3TotalPrice] = useState(0);

  const [carPremium, SetcarPremium] = useState(0);
  const [carDiesel, SetcarDiesel] = useState(0);
  const [car92, setcar92] = useState(0);
  const [car95, setcar95] = useState(0);
  const [carcount, Setcarcount] = useState(0);
  const [carPremiumCount, SetcarPremiumCount] = useState(0);
  const [carDieselCount, SetcarDieselCount] = useState(0);
  const [car92Count, setcar92Count] = useState(0);
  const [car95Count, setcar95Count] = useState(0);
  const [carTotalPrice, setcarTotalPrice] = useState(0);

  const [buscPremium, SetbuscPremium] = useState(0);
  const [buscDiesel, SetbuscDiesel] = useState(0);
  const [busc92, setbusc92] = useState(0);
  const [busc95, setbusc95] = useState(0);
  const [busccount, Setbusccount] = useState(0);
  const [buscPremiumCount, SetbuscPremiumCount] = useState(0);
  const [buscDieselCount, SetbuscDieselCount] = useState(0);
  const [busc92Count, setbusc92Count] = useState(0);
  const [busc95Count, setbusc95Count] = useState(0);
  const [buscTotalPrice, setbuscTotalPrice] = useState(0);

  const [bushPremium, SetbushPremium] = useState(0);
  const [bushDiesel, SetbushDiesel] = useState(0);
  const [bush92, setbush92] = useState(0);
  const [bush95, setbush95] = useState(0);
  const [bushcount, Setbushcount] = useState(0);
  const [bushPremiumCount, SetbushPremiumCount] = useState(0);
  const [bushDieselCount, SetbushDieselCount] = useState(0);
  const [bush92Count, setbush92Count] = useState(0);
  const [bush95Count, setbush95Count] = useState(0);
  const [bushTotalPrice, setbushTotalPrice] = useState(0);

  const [ltcPremium, SetltcPremium] = useState(0);
  const [ltcDiesel, SetltcDiesel] = useState(0);
  const [ltc92, setltc92] = useState(0);
  const [ltc95, setltc95] = useState(0);
  const [ltccount, Setltccount] = useState(0);
  const [ltcPremiumCount, SetltcPremiumCount] = useState(0);
  const [ltcDieselCount, SetltcDieselCount] = useState(0);
  const [ltc92Count, setltc92Count] = useState(0);
  const [ltc95Count, setltc95Count] = useState(0);
  const [ltcTotalPrice, setltcTotalPrice] = useState(0);

  const [lthPremium, SetlthPremium] = useState(0);
  const [lthDiesel, SetlthDiesel] = useState(0);
  const [lth92, setlth92] = useState(0);
  const [lth95, setlth95] = useState(0);
  const [lthcount, Setlthcount] = useState(0);
  const [lthPremiumCount, SetlthPremiumCount] = useState(0);
  const [lthDieselCount, SetlthDieselCount] = useState(0);
  const [lth92Count, setlth92Count] = useState(0);
  const [lth95Count, setlth95Count] = useState(0);
  const [lthTotalPrice, setlthTotalPrice] = useState(0);

  const [htcPremium, SethtcPremium] = useState(0);
  const [htcDiesel, SethtcDiesel] = useState(0);
  const [htc92, sethtc92] = useState(0);
  const [htc95, sethtc95] = useState(0);
  const [htccount, Sethtccount] = useState(0);
  const [htcPremiumCount, SethtcPremiumCount] = useState(0);
  const [htcDieselCount, SethtcDieselCount] = useState(0);
  const [htc92Count, sethtc92Count] = useState(0);
  const [htc95Count, sethtc95Count] = useState(0);
  const [htcTotalPrice, sethtcTotalPrice] = useState(0);

  const [hthPremium, SeththPremium] = useState(0);
  const [hthDiesel, SeththDiesel] = useState(0);
  const [hth92, sethth92] = useState(0);
  const [hth95, sethth95] = useState(0);
  const [hthcount, Seththcount] = useState(0);
  const [hthPremiumCount, SeththPremiumCount] = useState(0);
  const [hthDieselCount, SeththDieselCount] = useState(0);
  const [hth92Count, sethth92Count] = useState(0);
  const [hth95Count, sethth95Count] = useState(0);
  const [hthTotalPrice, seththTotalPrice] = useState(0);

  const [trPremium, SettrPremium] = useState(0);
  const [trDiesel, SettrDiesel] = useState(0);
  const [tr92, settr92] = useState(0);
  const [tr95, settr95] = useState(0);
  const [trcount, Settrcount] = useState(0);
  const [trPremiumCount, SettrPremiumCount] = useState(0);
  const [trDieselCount, SettrDieselCount] = useState(0);
  const [tr92Count, settr92Count] = useState(0);
  const [tr95Count, settr95Count] = useState(0);
  const [trTotalPrice, settrTotalPrice] = useState(0);

  const [trhPremium, SettrhPremium] = useState(0);
  const [trhDiesel, SettrhDiesel] = useState(0);
  const [trh92, settrh92] = useState(0);
  const [trh95, settrh95] = useState(0);
  const [trhcount, Settrhcount] = useState(0);
  const [trhPremiumCount, SettrhPremiumCount] = useState(0);
  const [trhDieselCount, SettrhDieselCount] = useState(0);
  const [trh92Count, settrh92Count] = useState(0);
  const [trh95Count, settrh95Count] = useState(0);
  const [trhTotalPrice, settrhTotalPrice] = useState(0);

  const [htPremium, SethtPremium] = useState(0);
  const [htDiesel, SethtDiesel] = useState(0);
  const [ht92, setht92] = useState(0);
  const [ht95, setht95] = useState(0);
  const [htcount, Sethtcount] = useState(0);
  const [htPremiumCount, SethtPremiumCount] = useState(0);
  const [htDieselCount, SethtDieselCount] = useState(0);
  const [ht92Count, setht92Count] = useState(0);
  const [ht95Count, setht95Count] = useState(0);
  const [htTotalPrice, sethtTotalPrice] = useState(0);

  const [traPremium, SettraPremium] = useState(0);
  const [traDiesel, SettraDiesel] = useState(0);
  const [tra92, settra92] = useState(0);
  const [tra95, settra95] = useState(0);
  const [tracount, Settracount] = useState(0);
  const [traPremiumCount, SettraPremiumCount] = useState(0);
  const [traDieselCount, SettraDieselCount] = useState(0);
  const [tra92Count, settra92Count] = useState(0);
  const [tra95Count, settra95Count] = useState(0);
  const [traTotalPrice, settraTotalPrice] = useState(0);

  const [straPremium, SetstraPremium] = useState(0);
  const [straDiesel, SetstraDiesel] = useState(0);
  const [stra92, setstra92] = useState(0);
  const [stra95, setstra95] = useState(0);
  const [stracount, Setstracount] = useState(0);
  const [straPremiumCount, SetstraPremiumCount] = useState(0);
  const [straDieselCount, SetstraDieselCount] = useState(0);
  const [stra92Count, setstra92Count] = useState(0);
  const [stra95Count, setstra95Count] = useState(0);
  const [straTotalPrice, setstraTotalPrice] = useState(0);

  const [hmPremium, SethmPremium] = useState(0);
  const [hmDiesel, SethmDiesel] = useState(0);
  const [hm92, sethm92] = useState(0);
  const [hm95, sethm95] = useState(0);
  const [hmcount, Sethmcount] = useState(0);
  const [hmPremiumCount, SethmPremiumCount] = useState(0);
  const [hmDieselCount, SethmDieselCount] = useState(0);
  const [hm92Count, sethm92Count] = useState(0);
  const [hm95Count, sethm95Count] = useState(0);
  const [hmTotalPrice, sethmTotalPrice] = useState(0);

  const [cvPremium, SetcvPremium] = useState(0);
  const [cvDiesel, SetcvDiesel] = useState(0);
  const [cv92, setcv92] = useState(0);
  const [cv95, setcv95] = useState(0);
  const [cvcount, Setcvcount] = useState(0);
  const [cvPremiumCount, SetcvPremiumCount] = useState(0);
  const [cvDieselCount, SetcvDieselCount] = useState(0);
  const [cv92Count, setcv92Count] = useState(0);
  const [cv95Count, setcv95Count] = useState(0);
  const [cvTotalPrice, setcvTotalPrice] = useState(0);

  const [ptPremium, SetptPremium] = useState(0);
  const [ptDiesel, SetptDiesel] = useState(0);
  const [pt92, setpt92] = useState(0);
  const [pt95, setpt95] = useState(0);
  const [ptcount, Setptcount] = useState(0);
  const [ptPremiumCount, SetptPremiumCount] = useState(0);
  const [ptDieselCount, SetptDieselCount] = useState(0);
  const [pt92Count, setpt92Count] = useState(0);
  const [pt95Count, setpt95Count] = useState(0);
  const [ptTotalPrice, setptTotalPrice] = useState(0);

  const [izPremium, SetizPremium] = useState(0);
  const [izDiesel, SetizDiesel] = useState(0);
  const [iz92, setiz92] = useState(0);
  const [iz95, setiz95] = useState(0);
  const [izcount, Setizcount] = useState(0);
  const [izPremiumCount, SetizPremiumCount] = useState(0);
  const [izDieselCount, SetizDieselCount] = useState(0);
  const [iz92Count, setiz92Count] = useState(0);
  const [iz95Count, setiz95Count] = useState(0);
  const [izTotalPrice, setizTotalPrice] = useState(0);

  const [giPremium, SetgiPremium] = useState(0);
  const [giDiesel, SetgiDiesel] = useState(0);
  const [gi92, setgi92] = useState(0);
  const [gi95, setgi95] = useState(0);
  const [gicount, Setgicount] = useState(0);
  const [giPremiumCount, SetgiPremiumCount] = useState(0);
  const [giDieselCount, SetgiDieselCount] = useState(0);
  const [gi92Count, setgi92Count] = useState(0);
  const [gi95Count, setgi95Count] = useState(0);
  const [giTotalPrice, setgiTotalPrice] = useState(0);

  const [amPremium, SetamPremium] = useState(0);
  const [amDiesel, SetamDiesel] = useState(0);
  const [am92, setam92] = useState(0);
  const [am95, setam95] = useState(0);
  const [amcount, Setamcount] = useState(0);
  const [amPremiumCount, SetamPremiumCount] = useState(0);
  const [amDieselCount, SetamDieselCount] = useState(0);
  const [am92Count, setam92Count] = useState(0);
  const [am95Count, setam95Count] = useState(0);
  const [amTotalPrice, setamTotalPrice] = useState(0);

  const [gPremium, SetgPremium] = useState(0);
  const [gDiesel, SetgDiesel] = useState(0);
  const [g92, setg92] = useState(0);
  const [g95, setg95] = useState(0);
  const [gcount, Setgcount] = useState(0);
  const [gPremiumCount, SetgPremiumCount] = useState(0);
  const [gDieselCount, SetgDieselCount] = useState(0);
  const [g92Count, setg92Count] = useState(0);
  const [g95Count, setg95Count] = useState(0);
  const [gTotalPrice, setgTotalPrice] = useState(0);

  const [hPremium, SethPremium] = useState(0);
  const [hDiesel, SethDiesel] = useState(0);
  const [h92, seth92] = useState(0);
  const [h95, seth95] = useState(0);
  const [hcount, Sethcount] = useState(0);
  const [hPremiumCount, SethPremiumCount] = useState(0);
  const [hDieselCount, SethDieselCount] = useState(0);
  const [h92Count, seth92Count] = useState(0);
  const [h95Count, seth95Count] = useState(0);
  const [hTotalPrice, sethTotalPrice] = useState(0);

  const [sPremium, SetsPremium] = useState(0);
  const [sDiesel, SetsDiesel] = useState(0);
  const [s92, sets92] = useState(0);
  const [s95, sets95] = useState(0);
  const [scount, Setscount] = useState(0);
  const [sPremiumCount, SetsPremiumCount] = useState(0);
  const [sDieselCount, SetsDieselCount] = useState(0);
  const [s92Count, sets92Count] = useState(0);
  const [s95Count, sets95Count] = useState(0);
  const [sTotalPrice, setsTotalPrice] = useState(0);

  const [smPremium, SetsmPremium] = useState(0);
  const [smDiesel, SetsmDiesel] = useState(0);
  const [sm92, setsm92] = useState(0);
  const [sm95, setsm95] = useState(0);
  const [smcount, Setsmcount] = useState(0);
  const [smPremiumCount, SetsmPremiumCount] = useState(0);
  const [smDieselCount, SetsmDieselCount] = useState(0);
  const [sm92Count, setsm92Count] = useState(0);
  const [sm95Count, setsm95Count] = useState(0);
  const [smTotalPrice, setsmTotalPrice] = useState(0);

  const [hoPremium, SethoPremium] = useState(0);
  const [hoDiesel, SethoDiesel] = useState(0);
  const [ho92, setho92] = useState(0);
  const [ho95, setho95] = useState(0);
  const [hocount, Sethocount] = useState(0);
  const [hoPremiumCount, SethoPremiumCount] = useState(0);
  const [hoDieselCount, SethoDieselCount] = useState(0);
  const [ho92Count, setho92Count] = useState(0);
  const [ho95Count, setho95Count] = useState(0);
  const [hoTotalPrice, sethoTotalPrice] = useState(0);

  const [huPremium, SethuPremium] = useState(0);
  const [huDiesel, SethuDiesel] = useState(0);
  const [hu92, sethu92] = useState(0);
  const [hu95, sethu95] = useState(0);
  const [hucount, Sethucount] = useState(0);
  const [huPremiumCount, SethuPremiumCount] = useState(0);
  const [huDieselCount, SethuDieselCount] = useState(0);
  const [hu92Count, sethu92Count] = useState(0);
  const [hu95Count, sethu95Count] = useState(0);
  const [huTotalPrice, sethuTotalPrice] = useState(0);

  const [bPremium, SetbPremium] = useState(0);
  const [bDiesel, SetbDiesel] = useState(0);
  const [b92, setb92] = useState(0);
  const [b95, setb95] = useState(0);
  const [bcount, Setbcount] = useState(0);
  const [bPremiumCount, SetbPremiumCount] = useState(0);
  const [bDieselCount, SetbDieselCount] = useState(0);
  const [b92Count, setb92Count] = useState(0);
  const [b95Count, setb95Count] = useState(0);
  const [bTotalPrice, setbTotalPrice] = useState(0);

  const [totalCount92, setTotalCount92] = useState(0);
  const [totalCountLiter92, setTotalCountLiter92] = useState(0);

  const [totalCount95, setTotalCount95] = useState(0);
  const [totalCountLiter95, setTotalCountLiter95] = useState(0);

  const [totalCountDiesel, setTotalCountDiesel] = useState(0);
  const [totalCountLiterDiesel, setTotalCountLiterDiesel] = useState(0);

  const [totalCountPHSD, setTotalCountPHSD] = useState(0);
  const [totalCountLiterPHSD, setTotalCountLiterPHSD] = useState(0);

  useEffect(() => {
    let cyPremium = 0;
    let cyDiesel = 0;
    let cy92 = 0;
    let cy95 = 0;
    let cy92count = 0;
    let cy95count = 0;
    let cyPremiumcount = 0;
    let cyDieselcount = 0;
    let cycount = 0;
    let cyTotalPrice = 0;

    let cy3Premium = 0;
    let cy3Diesel = 0;
    let cy392 = 0;
    let cy395 = 0;
    let cy3TotalPrice = 0;
    let cy392count = 0;
    let cy395count = 0;
    let cy3Premiumcount = 0;
    let cy3Dieselcount = 0;
    let cy3count = 0;

    let carPremium = 0;
    let carDiesel = 0;
    let car92 = 0;
    let car95 = 0;
    let carTotalPrice = 0;
    let car92count = 0;
    let car95count = 0;
    let carPremiumcount = 0;
    let carDieselcount = 0;
    let carcount = 0;

    let buscPremium = 0;
    let buscDiesel = 0;
    let busc92 = 0;
    let busc95 = 0;
    let buscTotalPrice = 0;
    let busc92count = 0;
    let busc95count = 0;
    let buscPremiumcount = 0;
    let buscDieselcount = 0;
    let busccount = 0;

    let bushPremium = 0;
    let bushDiesel = 0;
    let bush92 = 0;
    let bush95 = 0;
    let bushTotalPrice = 0;
    let bush92count = 0;
    let bush95count = 0;
    let bushPremiumcount = 0;
    let bushDieselcount = 0;
    let bushcount = 0;

    let ltcPremium = 0;
    let ltcDiesel = 0;
    let ltc92 = 0;
    let ltc95 = 0;
    let ltcTotalPrice = 0;
    let ltc92count = 0;
    let ltc95count = 0;
    let ltcPremiumcount = 0;
    let ltcDieselcount = 0;
    let ltccount = 0;

    let lthPremium = 0;
    let lthDiesel = 0;
    let lth92 = 0;
    let lth95 = 0;
    let lthTotalPrice = 0;
    let lth92count = 0;
    let lth95count = 0;
    let lthPremiumcount = 0;
    let lthDieselcount = 0;
    let lthcount = 0;

    let htcPremium = 0;
    let htcDiesel = 0;
    let htc92 = 0;
    let htc95 = 0;
    let htcTotalPrice = 0;
    let htc92count = 0;
    let htc95count = 0;
    let htcPremiumcount = 0;
    let htcDieselcount = 0;
    let htccount = 0;

    let hthPremium = 0;
    let hthDiesel = 0;
    let hth92 = 0;
    let hth95 = 0;
    let hthTotalPrice = 0;
    let hth92count = 0;
    let hth95count = 0;
    let hthPremiumcount = 0;
    let hthDieselcount = 0;
    let hthcount = 0;

    let trPremium = 0;
    let trDiesel = 0;
    let tr92 = 0;
    let tr95 = 0;
    let trTotalPrice = 0;
    let tr92count = 0;
    let tr95count = 0;
    let trPremiumcount = 0;
    let trDieselcount = 0;
    let trcount = 0;

    let trhPremium = 0;
    let trhDiesel = 0;
    let trh92 = 0;
    let trh95 = 0;
    let trhTotalPrice = 0;
    let trh92count = 0;
    let trh95count = 0;
    let trhPremiumcount = 0;
    let trhDieselcount = 0;
    let trhcount = 0;

    let htPremium = 0;
    let htDiesel = 0;
    let ht92 = 0;
    let ht95 = 0;
    let htTotalPrice = 0;
    let ht92count = 0;
    let ht95count = 0;
    let htPremiumcount = 0;
    let htDieselcount = 0;
    let htcount = 0;

    let traPremium = 0;
    let traDiesel = 0;
    let tra92 = 0;
    let tra95 = 0;
    let traTotalPrice = 0;
    let tra92count = 0;
    let tra95count = 0;
    let traPremiumcount = 0;
    let traDieselcount = 0;
    let tracount = 0;

    let straPremium = 0;
    let straDiesel = 0;
    let stra92 = 0;
    let stra95 = 0;
    let straTotalPrice = 0;
    let stra92count = 0;
    let stra95count = 0;
    let straPremiumcount = 0;
    let straDieselcount = 0;
    let stracount = 0;

    let hmPremium = 0;
    let hmDiesel = 0;
    let hm92 = 0;
    let hm95 = 0;
    let hmTotalPrice = 0;
    let hm92count = 0;
    let hm95count = 0;
    let hmPremiumcount = 0;
    let hmDieselcount = 0;
    let hmcount = 0;

    let cvPremium = 0;
    let cvDiesel = 0;
    let cv92 = 0;
    let cv95 = 0;
    let cvTotalPrice = 0;
    let cv92count = 0;
    let cv95count = 0;
    let cvPremiumcount = 0;
    let cvDieselcount = 0;
    let cvcount = 0;

    let ptPremium = 0;
    let ptDiesel = 0;
    let pt92 = 0;
    let pt95 = 0;
    let ptTotalPrice = 0;
    let pt92count = 0;
    let pt95count = 0;
    let ptPremiumcount = 0;
    let ptDieselcount = 0;
    let ptcount = 0;

    let izPremium = 0;
    let izDiesel = 0;
    let iz92 = 0;
    let iz95 = 0;
    let izTotalPrice = 0;
    let iz92count = 0;
    let iz95count = 0;
    let izPremiumcount = 0;
    let izDieselcount = 0;
    let izcount = 0;

    let giPremium = 0;
    let giDiesel = 0;
    let gi92 = 0;
    let gi95 = 0;
    let giTotalPrice = 0;
    let gi92count = 0;
    let gi95count = 0;
    let giPremiumcount = 0;
    let giDieselcount = 0;
    let gicount = 0;

    let amPremium = 0;
    let amDiesel = 0;
    let am92 = 0;
    let am95 = 0;
    let amTotalPrice = 0;
    let am92count = 0;
    let am95count = 0;
    let amPremiumcount = 0;
    let amDieselcount = 0;
    let amcount = 0;

    let gPremium = 0;
    let gDiesel = 0;
    let g92 = 0;
    let g95 = 0;
    let gTotalPrice = 0;
    let g92count = 0;
    let g95count = 0;
    let gPremiumcount = 0;
    let gDieselcount = 0;
    let gcount = 0;

    let hPremium = 0;
    let hDiesel = 0;
    let h92 = 0;
    let h95 = 0;
    let hTotalPrice = 0;
    let h92count = 0;
    let h95count = 0;
    let hPremiumcount = 0;
    let hDieselcount = 0;
    let hcount = 0;

    let sPremium = 0;
    let sDiesel = 0;
    let s92 = 0;
    let s95 = 0;
    let sTotalPrice = 0;
    let s92count = 0;
    let s95count = 0;
    let sPremiumcount = 0;
    let sDieselcount = 0;
    let scount = 0;

    let smPremium = 0;
    let smDiesel = 0;
    let sm92 = 0;
    let sm95 = 0;
    let smTotalPrice = 0;
    let sm92count = 0;
    let sm95count = 0;
    let smPremiumcount = 0;
    let smDieselcount = 0;
    let smcount = 0;

    let hoPremium = 0;
    let hoDiesel = 0;
    let ho92 = 0;
    let ho95 = 0;
    let hoTotalPrice = 0;
    let ho92count = 0;
    let ho95count = 0;
    let hoPremiumcount = 0;
    let hoDieselcount = 0;
    let hocount = 0;

    let huPremium = 0;
    let huDiesel = 0;
    let hu92 = 0;
    let hu95 = 0;
    let huTotalPrice = 0;
    let hu92count = 0;
    let hu95count = 0;
    let huPremiumcount = 0;
    let huDieselcount = 0;
    let hucount = 0;

    let bPremium = 0;
    let bDiesel = 0;
    let b92 = 0;
    let b95 = 0;
    let bTotalPrice = 0;
    let b92count = 0;
    let b95count = 0;
    let bPremiumcount = 0;
    let bDieselcount = 0;
    let bcount = 0;

    okData?.forEach((obj) => {
      if (obj.vehicleType === "Cycle") {
        if (obj.fuelType === "005-Premium Diesel") {
          cyPremium += obj.saleLiter;
          cyPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          cyDiesel += obj.saleLiter;
          cyDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          cy92 += obj.saleLiter;
          cy92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          cy95 += obj.saleLiter;
          cy95count += 1;
        }
        cyTotalPrice += obj.totalPrice;
        cycount += 1;
      }

      if (obj.vehicleType === "Cycle ( 3 Wheels )") {
        if (obj.fuelType === "005-Premium Diesel") {
          cy3Premium += obj.saleLiter;
          cy3Premiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          cy3Diesel += obj.saleLiter;
          cy3Dieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          cy392 += obj.saleLiter;
          cy392count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          cy395 += obj.saleLiter;
          cy395count += 1;
        }
        cy3TotalPrice += obj.totalPrice;
        cy3count += 1;
      }
      if (obj.vehicleType === "Car") {
        if (obj.fuelType === "005-Premium Diesel") {
          carPremium += obj.saleLiter;
          carPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          carDiesel += obj.saleLiter;
          carDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          car92 += obj.saleLiter;
          car92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          car95 += obj.saleLiter;
          car95count += 1;
        }
        carTotalPrice += obj.totalPrice;
        carcount += 1;
      }

      if (obj.vehicleType === "Bus ( City )") {
        if (obj.fuelType === "005-Premium Diesel") {
          buscPremium += obj.saleLiter;
          buscPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          buscDiesel += obj.saleLiter;
          buscDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          busc92 += obj.saleLiter;
          busc92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          busc95 += obj.saleLiter;
          busc95count += 1;
        }
        buscTotalPrice += obj.totalPrice;
        busccount += 1;
      }
      if (obj.vehicleType === "Bus ( High Way )") {
        if (obj.fuelType === "005-Premium Diesel") {
          bushPremium += obj.saleLiter;
          bushPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          bushDiesel += obj.saleLiter;
          bushDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          bush92 += obj.saleLiter;
          bush92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          bush95 += obj.saleLiter;
          bush95count += 1;
        }
        bushTotalPrice += obj.totalPrice;
        bushcount += 1;
      }
      if (obj.vehicleType === "Light Truck ( City )") {
        if (obj.fuelType === "005-Premium Diesel") {
          ltcPremium += obj.saleLiter;
          ltcPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          ltcDiesel += obj.saleLiter;
          ltcDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          ltc92 += obj.saleLiter;
          ltc92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          ltc95 += obj.saleLiter;
          ltc95count += 1;
        }
        ltcTotalPrice += obj.totalPrice;
        ltccount += 1;
      }
      if (obj.vehicleType === "Light Truck ( High way )") {
        if (obj.fuelType === "005-Premium Diesel") {
          lthPremium += obj.saleLiter;
          lthPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          lthDiesel += obj.saleLiter;
          lthDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          lth92 += obj.saleLiter;
          lth92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          lth95 += obj.saleLiter;
          lth95count += 1;
        }
        lthTotalPrice += obj.totalPrice;
        lthcount += 1;
      }
      if (obj.vehicleType === "Heavy Truck ( City )") {
        if (obj.fuelType === "005-Premium Diesel") {
          htcPremium += obj.saleLiter;
          htcPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          htcDiesel += obj.saleLiter;
          htcDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          htc92 += obj.saleLiter;
          htc92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          htc95 += obj.saleLiter;
          htc95count += 1;
        }
        htcTotalPrice += obj.totalPrice;
        htccount += 1;
      }

      if (obj.vehicleType === "Heavy Truck ( High way )") {
        if (obj.fuelType === "005-Premium Diesel") {
          hthPremium += obj.saleLiter;
          hthPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          hthDiesel += obj.saleLiter;
          hthDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          hth92 += obj.saleLiter;
          hth92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          hth95 += obj.saleLiter;
          hth95count += 1;
        }
        hthTotalPrice += obj.totalPrice;
        hthcount += 1;
      }

      if (obj.vehicleType === "Trailer ( City )") {
        if (obj.fuelType === "005-Premium Diesel") {
          trPremium += obj.saleLiter;
          trPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          trDiesel += obj.saleLiter;
          trDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          tr92 += obj.saleLiter;
          tr92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          tr95 += obj.saleLiter;
          tr95count += 1;
        }
        trTotalPrice += obj.totalPrice;
        trcount += 1;
      }

      if (obj.vehicleType === "Trailer ( High way )") {
        if (obj.fuelType === "005-Premium Diesel") {
          trhPremium += obj.saleLiter;
          trhPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          trhDiesel += obj.saleLiter;
          trhDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          trh92 += obj.saleLiter;
          trh92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          trh95 += obj.saleLiter;
          trh95count += 1;
        }
        trhTotalPrice += obj.totalPrice;
        trhcount += 1;
      }
      if (obj.vehicleType === "Htawlargyi") {
        if (obj.fuelType === "005-Premium Diesel") {
          htPremium += obj.saleLiter;
          htPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          htDiesel += obj.saleLiter;
          htDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          ht92 += obj.saleLiter;
          ht92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          ht95 += obj.saleLiter;
          ht95count += 1;
        }
        htTotalPrice += obj.totalPrice;
        htcount += 1;
      }
      if (obj.vehicleType === "Tractor") {
        if (obj.fuelType === "005-Premium Diesel") {
          traPremium += obj.saleLiter;
          traPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          traDiesel += obj.saleLiter;
          traDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          tra92 += obj.saleLiter;
          tra92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          tra95 += obj.saleLiter;
          tra95count += 1;
        }
        traTotalPrice += obj.totalPrice;
        tracount += 1;
      }
      if (obj.vehicleType === "Small Tractor") {
        if (obj.fuelType === "005-Premium Diesel") {
          straPremium += obj.saleLiter;
          straPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          straDiesel += obj.saleLiter;
          straDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          stra92 += obj.saleLiter;
          stra92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          stra95 += obj.saleLiter;
          stra95count += 1;
        }
        straTotalPrice += obj.totalPrice;
        stracount += 1;
      }
      if (obj.vehicleType === "Heavy Machinery") {
        if (obj.fuelType === "005-Premium Diesel") {
          hmPremium += obj.saleLiter;
          hmPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          hmDiesel += obj.saleLiter;
          hmDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          hm92 += obj.saleLiter;
          hm92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          hm95 += obj.saleLiter;
          hm95count += 1;
        }
        hmTotalPrice += obj.totalPrice;
        hmcount += 1;
      }
      if (obj.vehicleType === "Commercial Vehicle") {
        if (obj.fuelType === "005-Premium Diesel") {
          cvPremium += obj.saleLiter;
          cvPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          cvDiesel += obj.saleLiter;
          cvDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          cv92 += obj.saleLiter;
          cv92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          cv95 += obj.saleLiter;
          cv95count += 1;
        }
        cvTotalPrice += obj.totalPrice;
        cvcount += 1;
      }
      if (obj.vehicleType === "Phone Tower") {
        if (obj.fuelType === "005-Premium Diesel") {
          ptPremium += obj.saleLiter;
          ptPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          ptDiesel += obj.saleLiter;
          ptDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          pt92 += obj.saleLiter;
          pt92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          pt95 += obj.saleLiter;
          pt95count += 1;
        }
        ptTotalPrice += obj.totalPrice;
        ptcount += 1;
      }
      if (obj.vehicleType === "Industrial Zone") {
        if (obj.fuelType === "005-Premium Diesel") {
          izPremium += obj.saleLiter;
          izPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          izDiesel += obj.saleLiter;
          izDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          iz92 += obj.saleLiter;
          iz92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          iz95 += obj.saleLiter;
          iz95count += 1;
        }
        izTotalPrice += obj.totalPrice;
        izcount += 1;
      }
      if (obj.vehicleType === "Generator Industry") {
        if (obj.fuelType === "005-Premium Diesel") {
          giPremium += obj.saleLiter;
          giPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          giDiesel += obj.saleLiter;
          giDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          gi92 += obj.saleLiter;
          gi92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          gi95 += obj.saleLiter;
          gi95count += 1;
        }
        giTotalPrice += obj.totalPrice;
        gicount += 1;
      }
      if (obj.vehicleType === "Agriculture Machine") {
        if (obj.fuelType === "005-Premium Diesel") {
          amPremium += obj.saleLiter;
          amPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          amDiesel += obj.saleLiter;
          amDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          am92 += obj.saleLiter;
          am92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          am95 += obj.saleLiter;
          am95count += 1;
        }
        amTotalPrice += obj.totalPrice;
        amcount += 1;
      }
      if (obj.vehicleType === "Generator ( Home Use )") {
        if (obj.fuelType === "005-Premium Diesel") {
          gPremium += obj.saleLiter;
          gPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          gDiesel += obj.saleLiter;
          gDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          g92 += obj.saleLiter;
          g92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          g95 += obj.saleLiter;
          g95count += 1;
        }
        gTotalPrice += obj.totalPrice;
        gcount += 1;
      }
      if (obj.vehicleType === "Hospital") {
        if (obj.fuelType === "005-Premium Diesel") {
          hPremium += obj.saleLiter;
          hPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          hDiesel += obj.saleLiter;
          hDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          h92 += obj.saleLiter;
          h92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          h95 += obj.saleLiter;
          h95count += 1;
        }
        hTotalPrice += obj.totalPrice;
        hcount += 1;
      }
      if (obj.vehicleType === "School") {
        if (obj.fuelType === "005-Premium Diesel") {
          sPremium += obj.saleLiter;
          sPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          sDiesel += obj.saleLiter;
          sDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          s92 += obj.saleLiter;
          s92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          s95 += obj.saleLiter;
          s95count += 1;
        }
        sTotalPrice += obj.totalPrice;
        scount += 1;
      }
      if (obj.vehicleType === "Super Market") {
        if (obj.fuelType === "005-Premium Diesel") {
          smPremium += obj.saleLiter;
          smPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          smDiesel += obj.saleLiter;
          smDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          sm92 += obj.saleLiter;
          sm92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          sm95 += obj.saleLiter;
          sm95count += 1;
        }
        smTotalPrice += obj.totalPrice;
        smcount += 1;
      }
      if (obj.vehicleType === "Hotel") {
        if (obj.fuelType === "005-Premium Diesel") {
          hoPremium += obj.saleLiter;
          hoPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          hoDiesel += obj.saleLiter;
          hoDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          ho92 += obj.saleLiter;
          ho92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          ho95 += obj.saleLiter;
          ho95count += 1;
        }
        hoTotalPrice += obj.totalPrice;
        hocount += 1;
      }
      if (obj.vehicleType === "Housing") {
        if (obj.fuelType === "005-Premium Diesel") {
          huPremium += obj.saleLiter;
          huPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          huDiesel += obj.saleLiter;
          huDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          hu92 += obj.saleLiter;
          hu92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          hu95 += obj.saleLiter;
          hu95count += 1;
        }
        huTotalPrice += obj.totalPrice;
        hucount += 1;
      }
      if (obj.vehicleType === "Boat") {
        if (obj.fuelType === "005-Premium Diesel") {
          bPremium += obj.saleLiter;
          bPremiumcount += 1;
        }
        if (obj.fuelType === "004-Diesel") {
          bDiesel += obj.saleLiter;
          bDieselcount += 1;
        }
        if (obj.fuelType === "001-Octane Ron(92)") {
          b92 += obj.saleLiter;
          b92count += 1;
        }
        if (obj.fuelType === "002-Octane Ron(95)") {
          b95 += obj.saleLiter;
          b95count += 1;
        }
        bTotalPrice += obj.totalPrice;
        bcount += 1;
      }
    });

    SetcyclePremium(cyPremium);
    SetcycleDiesel(cyDiesel);
    setcycle92(cy92);
    setcycle95(cy95);
    Setcyclecount(cycount);
    SetcyclePremiumCount(cyPremiumcount);
    SetcycleDieselCount(cyDieselcount);
    setcycle92Count(cy92count);
    setcycle95Count(cy95count);
    setcycleTotalPrice(cyTotalPrice);

    Setcycle3Premium(cy3Premium);
    Setcycle3Diesel(cy3Diesel);
    setcycle392(cy392);
    setcycle395(cy395);
    Setcycle3count(cy3count);
    Setcycle3PremiumCount(cy3Premiumcount);
    Setcycle3DieselCount(cy3Dieselcount);
    setcycle392Count(cy392count);
    setcycle395Count(cy395count);
    setcycle3TotalPrice(cy3TotalPrice);

    SetcarPremium(carPremium);
    SetcarDiesel(carDiesel);
    setcar92(car92);
    setcar95(car95);
    Setcarcount(carcount);
    SetcarPremiumCount(carPremiumcount);
    SetcarDieselCount(carDieselcount);
    setcar92Count(car92count);
    setcar95Count(car95count);
    setcarTotalPrice(carTotalPrice);

    SetbuscPremium(buscPremium);
    SetbuscDiesel(buscDiesel);
    setbusc92(busc92);
    setbusc95(busc95);
    Setbusccount(busccount);
    SetbuscPremiumCount(buscPremiumcount);
    SetbuscDieselCount(buscDieselcount);
    setbusc92Count(busc92count);
    setbusc95Count(busc95count);
    setbuscTotalPrice(buscTotalPrice);

    SetbushPremium(bushPremium);
    SetbushDiesel(bushDiesel);
    setbush92(bush92);
    setbush95(bush95);
    Setbushcount(bushcount);
    SetbushPremiumCount(bushPremiumcount);
    SetbushDieselCount(bushDieselcount);
    setbush92Count(bush92count);
    setbush95Count(bush95count);
    setbushTotalPrice(bushTotalPrice);

    SetltcPremium(ltcPremium);
    SetltcDiesel(ltcDiesel);
    setltc92(ltc92);
    setltc95(ltc95);
    Setltccount(ltccount);
    SetltcPremiumCount(ltcPremiumcount);
    SetltcDieselCount(ltcDieselcount);
    setltc92Count(ltc92count);
    setltc95Count(ltc95count);
    setltcTotalPrice(ltcTotalPrice);

    SetlthPremium(lthPremium);
    SetlthDiesel(lthDiesel);
    setlth92(lth92);
    setlth95(lth95);
    Setlthcount(lthcount);
    SetlthPremiumCount(lthPremiumcount);
    SetlthDieselCount(lthDieselcount);
    setlth92Count(lth92count);
    setlth95Count(lth95count);
    setlthTotalPrice(lthTotalPrice);

    SethtcPremium(htcPremium);
    SethtcDiesel(htcDiesel);
    sethtc92(htc92);
    sethtc95(htc95);
    Sethtccount(htccount);
    SethtcPremiumCount(htcPremiumcount);
    SethtcDieselCount(htcDieselcount);
    sethtc92Count(htc92count);
    sethtc95Count(htc95count);
    sethtcTotalPrice(htcTotalPrice);

    SeththPremium(hthPremium);
    SeththDiesel(hthDiesel);
    sethth92(hth92);
    sethth95(hth95);
    Seththcount(hthcount);
    SeththPremiumCount(hthPremiumcount);
    SeththDieselCount(hthDieselcount);
    sethth92Count(hth92count);
    sethth95Count(hth95count);
    seththTotalPrice(hthTotalPrice);

    SettrPremium(trPremium);
    SettrDiesel(trDiesel);
    settr92(tr92);
    settr95(tr95);
    Settrcount(trcount);
    SettrPremiumCount(trPremiumcount);
    SettrDieselCount(trDieselcount);
    settr92Count(tr92count);
    settr95Count(tr95count);
    settrTotalPrice(trTotalPrice);

    SettrhPremium(trhPremium);
    SettrhDiesel(trhDiesel);
    settrh92(trh92);
    settrh95(trh95);
    Settrhcount(trhcount);
    SettrhPremiumCount(trhPremiumcount);
    SettrhDieselCount(trhDieselcount);
    settrh92Count(trh92count);
    settrh95Count(trh95count);
    settrhTotalPrice(trhTotalPrice);

    SethtPremium(htPremium);
    SethtDiesel(htDiesel);
    setht92(ht92);
    setht95(ht95);
    Sethtcount(htcount);
    SethtPremiumCount(htPremiumcount);
    SethtDieselCount(htDieselcount);
    setht92Count(ht92count);
    setht95Count(ht95count);
    sethtTotalPrice(htTotalPrice);

    SettraPremium(traPremium);
    SettraDiesel(traDiesel);
    settra92(tra92);
    settra95(tra95);
    Settracount(tracount);
    SettraPremiumCount(traPremiumcount);
    SettraDieselCount(traDieselcount);
    settra92Count(tra92count);
    settra95Count(tra95count);
    settraTotalPrice(traTotalPrice);

    SetstraPremium(straPremium);
    SetstraDiesel(straDiesel);
    setstra92(stra92);
    setstra95(stra95);
    Setstracount(stracount);
    SetstraPremiumCount(straPremiumcount);
    SetstraDieselCount(straDieselcount);
    setstra92Count(stra92count);
    setstra95Count(stra95count);
    setstraTotalPrice(straTotalPrice);

    SethmPremium(hmPremium);
    SethmDiesel(hmDiesel);
    sethm92(hm92);
    sethm95(hm95);
    Sethmcount(hmcount);
    SethmPremiumCount(hmPremiumcount);
    SethmDieselCount(hmDieselcount);
    sethm92Count(hm92count);
    sethm95Count(hm95count);
    sethmTotalPrice(hmTotalPrice);

    SetcvPremium(cvPremium);
    SetcvDiesel(cvDiesel);
    setcv92(cv92);
    setcv95(cv95);
    Setcvcount(cvcount);
    SetcvPremiumCount(cvPremiumcount);
    SetcvDieselCount(cvDieselcount);
    setcv92Count(cv92count);
    setcv95Count(cv95count);
    setcvTotalPrice(cvTotalPrice);

    SetptPremium(ptPremium);
    SetptDiesel(ptDiesel);
    setpt92(pt92);
    setpt95(pt95);
    Setptcount(ptcount);
    SetptPremiumCount(ptPremiumcount);
    SetptDieselCount(ptDieselcount);
    setpt92Count(pt92count);
    setpt95Count(pt95count);
    setptTotalPrice(ptTotalPrice);

    SetizPremium(izPremium);
    SetizDiesel(izDiesel);
    setiz92(iz92);
    setiz95(iz95);
    Setizcount(izcount);
    SetizPremiumCount(izPremiumcount);
    SetizDieselCount(izDieselcount);
    setiz92Count(iz92count);
    setiz95Count(iz95count);
    setizTotalPrice(izTotalPrice);

    SetgiPremium(giPremium);
    SetgiDiesel(giDiesel);
    setgi92(gi92);
    setgi95(gi95);
    Setgicount(gicount);
    SetgiPremiumCount(giPremiumcount);
    SetgiDieselCount(giDieselcount);
    setgi92Count(gi92count);
    setgi95Count(gi95count);
    setgiTotalPrice(giTotalPrice);

    SetamPremium(amPremium);
    SetamDiesel(amDiesel);
    setam92(am92);
    setam95(am95);
    Setamcount(amcount);
    SetamPremiumCount(amPremiumcount);
    SetamDieselCount(amDieselcount);
    setam92Count(am92count);
    setam95Count(am95count);
    setamTotalPrice(amTotalPrice);

    SetgPremium(gPremium);
    SetgDiesel(gDiesel);
    setg92(g92);
    setg95(g95);
    Setgcount(gcount);
    SetgPremiumCount(gPremiumcount);
    SetgDieselCount(gDieselcount);
    setg92Count(g92count);
    setg95Count(g95count);
    setgTotalPrice(gTotalPrice);

    SethPremium(hPremium);
    SethDiesel(hDiesel);
    seth92(h92);
    seth95(h95);
    Sethcount(hcount);
    SethPremiumCount(hPremiumcount);
    SethDieselCount(hDieselcount);
    seth92Count(h92count);
    seth95Count(h95count);
    sethTotalPrice(hTotalPrice);

    SetsPremium(sPremium);
    SetsDiesel(sDiesel);
    sets92(s92);
    sets95(s95);
    Setscount(scount);
    SetsPremiumCount(sPremiumcount);
    SetsDieselCount(sDieselcount);
    sets92Count(s92count);
    sets95Count(s95count);
    setsTotalPrice(sTotalPrice);

    SetsmPremium(smPremium);
    SetsmDiesel(smDiesel);
    setsm92(sm92);
    setsm95(sm95);
    Setsmcount(smcount);
    SetsmPremiumCount(smPremiumcount);
    SetsmDieselCount(smDieselcount);
    setsm92Count(sm92count);
    setsm95Count(sm95count);
    setsmTotalPrice(smTotalPrice);

    SethoPremium(hoPremium);
    SethoDiesel(hoDiesel);
    setho92(ho92);
    setho95(ho95);
    Sethocount(hocount);
    SethoPremiumCount(hoPremiumcount);
    SethoDieselCount(hoDieselcount);
    setho92Count(ho92count);
    setho95Count(ho95count);
    sethoTotalPrice(hoTotalPrice);

    SethuPremium(huPremium);
    SethuDiesel(huDiesel);
    sethu92(hu92);
    sethu95(hu95);
    Sethucount(hucount);
    SethuPremiumCount(huPremiumcount);
    SethuDieselCount(huDieselcount);
    sethu92Count(hu92count);
    sethu95Count(hu95count);
    sethuTotalPrice(huTotalPrice);

    SetbPremium(bPremium);
    SetbDiesel(bDiesel);
    setb92(b92);
    setb95(b95);
    Setbcount(bcount);
    SetbPremiumCount(bPremiumcount);
    SetbDieselCount(bDieselcount);
    setb92Count(b92count);
    setb95Count(b95count);
    setbTotalPrice(bTotalPrice);

    setTotalCountLiter92(
      cy92 +
        cy392 +
        car92 +
        busc92 +
        bush92 +
        ltc92 +
        lth92 +
        htc92 +
        hth92 +
        tr92 +
        trh92 +
        ht92 +
        tra92 +
        stra92 +
        hm92 +
        cv92 +
        pt92 +
        iz92 +
        gi92 +
        am92 +
        g92 +
        h92 +
        s92 +
        sm92 +
        ho92 +
        hu92 +
        b92
    );

    setTotalCount92(
      cy92count +
        cy392count +
        car92count +
        busc92count +
        bush92count +
        ltc92count +
        lth92count +
        htc92count +
        hth92count +
        tr92count +
        trh92count +
        ht92count +
        tra92count +
        stra92count +
        hm92count +
        cv92count +
        pt92count +
        iz92count +
        gi92count +
        am92count +
        g92count +
        h92count +
        s92count +
        sm92count +
        ho92count +
        hu92count +
        b92count
    );

    setTotalCount95(
      cy95count +
        cy395count +
        car95Count +
        busc95count +
        bush95count +
        ltc95count +
        lth95count +
        htc95count +
        tr95count +
        trh95count +
        ht95count +
        tra95count +
        stra95count +
        hm95count +
        cv95count +
        pt95count +
        iz95count +
        gi95count +
        am95count +
        g95count +
        h95count +
        s95count +
        sm95count +
        ho95count +
        hu95count +
        b95count
    );

    setTotalCountLiter95(
      cy95 +
        cy395 +
        car95 +
        busc95 +
        bush95 +
        ltc95 +
        lth95 +
        htc95 +
        hth95 +
        tr95 +
        trh95 +
        ht95 +
        tra95 +
        stra95 +
        hm95 +
        cv95 +
        pt95 +
        iz95 +
        gi95 +
        am95 +
        g95 +
        h95 +
        s95 +
        sm95 +
        ho95 +
        hu95 +
        b95
    );

    setTotalCountDiesel(
      cyDieselcount +
        cy3Dieselcount +
        carDieselcount +
        buscDieselcount +
        bushDieselcount +
        ltcDieselcount +
        lthDieselcount +
        htcDieselcount +
        hthDieselcount +
        trDieselcount +
        trhDieselcount +
        htDieselcount +
        traDieselcount +
        straDieselcount +
        hmDieselcount +
        cvDieselcount +
        ptDieselcount +
        izDieselcount +
        giDieselcount +
        amDieselcount +
        gDieselcount +
        hDieselcount +
        sDieselcount +
        smDieselcount +
        hoDieselcount +
        huDieselcount +
        bDieselcount
    );

    setTotalCountLiterDiesel(
      cyDiesel +
        cy3Diesel +
        carDiesel +
        buscDiesel +
        bushDiesel +
        ltcDiesel +
        lthDiesel +
        htcDiesel +
        hthDiesel +
        trDiesel +
        trhDiesel +
        htDiesel +
        traDiesel +
        straDiesel +
        hmDiesel +
        cvDiesel +
        ptDiesel +
        izDiesel +
        giDiesel +
        amDiesel +
        gDiesel +
        hDiesel +
        sDiesel +
        smDiesel +
        hoDiesel +
        huDiesel +
        bDiesel
    );

    setTotalCountLiterPHSD(
      cyPremium +
        cy3Premium +
        carPremium +
        buscPremium +
        bushPremium +
        ltcPremium +
        lthPremium +
        htcPremium +
        hthPremium +
        trPremium +
        trhPremium +
        htPremium +
        traPremium +
        straPremium +
        hmPremium +
        cvPremium +
        ptPremium +
        izPremium +
        giPremium +
        amPremium +
        gPremium +
        hPremium +
        sPremium +
        smPremium +
        hoPremium +
        huPremium +
        bPremium
    );

    setTotalCountPHSD(
      cyPremiumcount +
        cy3Premiumcount +
        carPremiumcount +
        buscPremiumcount +
        bushPremiumcount +
        ltcPremiumcount +
        lthPremiumcount +
        htcPremiumcount +
        hthPremiumcount +
        trPremiumcount +
        trhPremiumcount +
        htPremiumcount +
        traPremiumcount +
        straPremiumcount +
        hmPremiumcount +
        cvPremiumcount +
        ptPremiumcount +
        izPremiumcount +
        giPremiumcount +
        amPremiumcount +
        gPremiumcount +
        hPremiumcount +
        sPremiumcount +
        smPremiumcount +
        hoPremiumcount +
        huPremiumcount +
        bPremiumcount
    );
  }, [okData]);

  console.log(okData, "..................");

  // const format = (date) => {
  //   const dateObj = new Date(date);

  //   const day = String(dateObj.getUTCDate()).padStart(2, "0");
  //   const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-based
  //   const year = dateObj.getUTCFullYear();

  //   // const time = dateObj?.toISOString().slice(11, 19);

  //   return `${day}-${month}-${year}`;
  // };

  const format = (dateString) => {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}-${month}-${year}`;
  };

  return (
    <div className="mt-[50px]">
      {single == "Please" ? (
        <table id="category_table" ref={tableRef}>
          <tr>
            <th rowSpan={4}>{language.no}</th>
            <th rowSpan={4} colSpan={2}>
              {language.content}
            </th>
            {language.no === "စဉ်" ? (
              <th colSpan={10}>
                {startDate} ရက်နေ့မှ {endDate} ရက်နေ့အထိ
              </th>
            ) : (
              <th colSpan={10}>
                From {format(startDate)} To {format(endDate)}
              </th>
            )}
            <th rowSpan={4}>{language.remark}</th>
          </tr>
          <tr>
            <th colSpan={10}>{language.fuelType}</th>
          </tr>
          <tr>
            <th colSpan={2}>92 Ron</th>
            <th colSpan={2}>95 Ron</th>
            <th colSpan={2}>97 Ron</th>
            <th colSpan={2}>HSD</th>
            <th colSpan={2}>PHSD</th>
          </tr>
          <tr>
            {/* <th colSpan={3}>{language.saleDepartment}</th> */}
            <th colSpan>{language.count}</th>
            <th colSpan>{language.liter}</th>
            <th colSpan>{language.count}</th>
            <th colSpan>{language.liter}</th>
            <th colSpan>{language.count}</th>
            <th colSpan>{language.liter}</th>
            <th colSpan>{language.count}</th>
            <th colSpan>{language.liter}</th>
            <th colSpan>{language.count}</th>
            <th colSpan>{language.liter}</th>
          </tr>
          <tr>
            <td>{language.aa}</td>
            <td colSpan={2}>{language.cycle}</td>
            <td className=" text-right">{cycle92Count}</td>
            <td className="text-right">
              {cycle92 ? cycle92.toFixed(3) : "00.000"}{" "}
            </td>
            <td className="text-right">{cycle95Count}</td>
            <td className="text-right">
              {cycle95 ? cycle95.toFixed(3) : "00.000"}{" "}
            </td>
            <td className="text-right">0</td>
            <td className="text-right">00.00</td>
            <td className="text-right">{cycleDieselCount}</td>
            <td className="text-right">
              {cycleDiesel ? cycleDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className="text-right">{cyclePremiumCount}</td>
            <td className="text-right">
              {cyclePremium ? cyclePremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{cyclecount ? cyclecount : "00.000"}</td> */}
            {/* <td>{(cycle92 + cycle95 + cycleDiesel + cyclePremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td className="bg-white">{language.bb}</td>
            <td colSpan={2} className="bg-white">
              {language.cycle3Wheel}
            </td>
            <td className=" text-right">{cycle392Count}</td>
            <td className=" text-right">
              {cycle392 ? cycle392.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{cycle395Count}</td>
            <td className=" text-right">
              {cycle395 ? cycle395.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{cycle3DieselCount}</td>
            <td className=" text-right">
              {cycle3Diesel ? cycle3Diesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{cycle3PremiumCount}</td>
            <td className=" text-right">
              {cycle3Premium ? cycle3Premium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{cycle3count ? cycle3count : "00.000"}</td> */}
            {/* <td>{(cycle392 + cycle395 + cycle3Diesel + cycle3Premium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td>{language.cc}</td>
            <td colSpan={2}>{language.car}</td>
            <td className=" text-right">{car92Count}</td>
            <td className=" text-right">
              {car92 ? car92.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{car95Count}</td>
            <td className=" text-right">
              {car95 ? car95.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{carDieselCount}</td>
            <td className=" text-right">
              {carDiesel ? carDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{carPremiumCount}</td>
            <td className=" text-right">
              {carPremium ? carPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{carcount ? carcount : "00.000"}</td> */}
            {/* <td>{(busc92 + busc95 + buscDiesel + buscPremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td rowSpan={2} className="bg-white">
              {language.dd}
            </td>
            <td rowSpan={2} className="bg-white">
              {language.bus}
            </td>

            <td className="bg-white text-start">
              ({language.a}) {language.city}
            </td>
            <td className=" text-right">{busc92Count}</td>
            <td className=" text-right">
              {busc92 ? busc92.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{busc95Count}</td>
            <td className=" text-right">
              {busc95 ? busc95.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{buscDieselCount}</td>
            <td className=" text-right">
              {buscDiesel ? buscDiesel.toFixed(3) : "00.000"}
            </td>
            <td className=" text-right">{buscPremiumCount}</td>
            <td className=" text-right">
              {buscPremium ? buscPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{busccount ? busccount : "00.000"}</td>
                  <td>{(busc92 + busc95 + buscDiesel + buscPremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td className="text-start">
              ({language.b}) {language.highWay}
            </td>
            <td className=" text-right">{bush92Count}</td>
            <td className=" text-right">
              {bush92 ? bush92.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{bush95Count}</td>
            <td className=" text-right">
              {bush95 ? busc95.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{bushDieselCount}</td>
            <td className=" text-right">
              {bushDiesel ? bushDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{bushPremiumCount}</td>
            <td className=" text-right">
              {bushPremium ? bushPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{bushcount ? bushcount : "00.000"}</td>
                  <td>{(bush92 + bush95 + bushDiesel + bushPremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td rowSpan={2} className="bg-white">
              {language.ee}
            </td>
            <td rowSpan={2} className="bg-white">
              {language.lightTruck}
            </td>

            <td className="bg-white text-start">
              ({language.a}) {language.city}
            </td>
            <td className=" text-right">{ltc92Count}</td>
            <td className=" text-right">
              {ltc92 ? ltc92.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{ltc95Count}</td>
            <td className=" text-right">
              {ltc95 ? ltc95.toFixed(3) : "00.000"}
            </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{ltcDieselCount}</td>
            <td className=" text-right">
              {ltcDiesel ? ltcDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{ltcPremiumCount}</td>
            <td className=" text-right">
              {ltcPremium ? ltcPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{ltccount ? ltccount : "00.000"}</td>
                  <td>{(ltc92 + ltc95 + ltcDiesel + ltcPremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td className="text-start">
              ({language.b}) {language.highWay}
            </td>
            <td className=" text-right">{lth92Count}</td>
            <td className=" text-right">
              {lth92 ? lth92.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{lth95Count}</td>
            <td className=" text-right">
              {lth95 ? lth95.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{lthDieselCount}</td>
            <td className=" text-right">
              {lthDiesel ? lthDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{lthPremiumCount}</td>
            <td className=" text-right">
              {lthPremium ? lthPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{lthcount ? lthcount : "00.000"}</td>
                  <td>{(lth92 + lth95 + lthDiesel + lthPremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td rowSpan={2} className="bg-white">
              {language.ff}
            </td>
            <td rowSpan={2} className="bg-white">
              {language.heavyTruck}
            </td>

            <td className="bg-white text-start">
              ({language.a}) {language.city}
            </td>
            <td className=" text-right">{htc92Count}</td>
            <td className=" text-right">
              {htc92 ? htc92.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{htc95Count}</td>
            <td className=" text-right">
              {htc95 ? htc95.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{htcDieselCount}</td>
            <td className=" text-right">
              {htcDiesel ? htcDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{htcPremiumCount}</td>
            <td className=" text-right">
              {htcPremium ? htcPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{htccount ? htccount : "00.000"}</td>
                  <td>{(htc92 + htc95 + htcDiesel + htcPremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td className="text-start">
              ({language.b}) {language.highWay}
            </td>
            <td className=" text-right">{hth92Count}</td>
            <td className=" text-right">
              {hth92 ? hth92.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{hth95Count}</td>
            <td className=" text-right">
              {hth95 ? hth95.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{hthDieselCount}</td>
            <td className=" text-right">
              {hthDiesel ? hthDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{hthPremiumCount}</td>
            <td className=" text-right">
              {hthPremium ? hthPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{hthcount ? hthcount : "00.000"}</td>
                  <td>{(hth92 + hth95 + hthDiesel + hthPremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td rowSpan={2} className="bg-white">
              {language.gg}
            </td>
            <td className="bg-white" rowSpan={2}>
              {language.trailer}
            </td>
            <td className="bg-white text-start">
              ({language.a}) {language.city}
            </td>
            <td className=" text-right">{tr92Count}</td>
            <td className=" text-right">
              {tr92 ? tr92.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{tr95Count}</td>
            <td className=" text-right">
              {tr95 ? tr95.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{trDieselCount}</td>
            <td className=" text-right">
              {trDiesel ? trDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{trPremiumCount}</td>
            <td className=" text-right">
              {trPremium ? trPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{trcount ? trcount : "00.000"}</td>
                  <td>{(tr92 + tr95 + trDiesel + trPremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td className="text-start">
              ({language.b}) {language.highWay}
            </td>
            <td className=" text-right">{trh92Count}</td>
            <td className=" text-right">
              {trh92 ? trh92.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{trh95Count}</td>
            <td className=" text-right">
              {trh95 ? trh95.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{trhDieselCount}</td>
            <td className=" text-right">
              {trhDiesel ? trhDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{trhPremiumCount}</td>
            <td className=" text-right">
              {trhPremium ? trhPremium.toFixed(3) : "00.000"}
            </td>
            {/* <td>{trhcount ? trhcount : "00.000"}</td>
                  <td>{(trh92 + trh95 + trhDiesel + trhPremium).toFixed(3)}</td> */}
            <td></td>
          </tr>
          <tr>
            <td className="bg-white">{language.hh}</td>
            <td colSpan={2} className="bg-white">
              {language.htawlargyi}
            </td>
            <td className=" text-right">{ht92Count}</td>
            <td className=" text-right">
              {ht92 ? ht92.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{ht95Count}</td>
            <td className=" text-right">
              {ht95 ? ht95.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{htDieselCount}</td>
            <td className=" text-right">
              {htDiesel ? htDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{htPremiumCount}</td>
            <td className=" text-right">
              {htPremium ? htPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{htcount ? htcount : "00.000"}</td>
                  <td>{(ht92 + ht95 + htDiesel + htPremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td rowSpan={2}>{language.ii}</td>
            <td rowSpan={2}>{language.tractor}</td>
            <td className="text-start">
              ({language.a}) {language.tractor}
            </td>
            <td className=" text-right">{tra92Count}</td>
            <td className=" text-right">
              {tra92 ? tra92.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{tra95Count}</td>
            <td className=" text-right">
              {tra95 ? tra95.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{traDieselCount}</td>
            <td className=" text-right">
              {traDiesel ? traDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{traPremiumCount}</td>
            <td className=" text-right">
              {traPremium ? traPremium.toFixed(3) : "00.000"}
            </td>
            {/* <td>{tracount ? tracount : "00.000"}</td>
                  <td>{(tra92 + tra95 + traDiesel + traPremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td className="bg-white text-start">
              ({language.b}) {language.smallTractor}
            </td>
            <td className=" text-right">{stra92Count}</td>
            <td className=" text-right">
              {stra92 ? stra92.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{stra95Count}</td>
            <td className=" text-right">
              {stra95 ? stra95.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{straDieselCount}</td>
            <td className=" text-right">
              {straDiesel ? straDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{straPremiumCount}</td>
            <td className=" text-right">
              {straPremium ? straPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{stracount ? stracount : "00.000"}</td>
                  <td>{(stra92 + stra95 + straDiesel + straPremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td>{language.jj}</td>
            <td colSpan={2}>{language.heavyMachinery}</td>
            <td className=" text-right">{hm92Count}</td>
            <td className=" text-right">
              {hm92 ? hm92.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{hm95Count}</td>
            <td className=" text-right">
              {hm95 ? hm95.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{hmDieselCount}</td>
            <td className=" text-right">
              {hmDiesel ? hmDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{hmPremiumCount}</td>
            <td className=" text-right">
              {hmPremium ? hmPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{hmcount ? hmcount : "00.000"}</td>
                  <td>{(hm92 + hm95 + hmDiesel + hmPremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td className="bg-white">{language.kk}</td>
            <td colSpan={2} className="bg-white">
              {language.commericalVehicle}
            </td>
            <td className=" text-right">{cv92Count}</td>
            <td className=" text-right">
              {cv92 ? cv92.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{cv95Count}</td>
            <td className=" text-right">
              {cv95 ? cv95.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{cvDieselCount}</td>
            <td className=" text-right">
              {cvDiesel ? cvDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{cvPremiumCount}</td>
            <td className=" text-right">
              {cvPremium ? cvPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{cvcount ? cvcount : "00.000"}</td>
                  <td>{(cv92 + cv95 + cvDiesel + cvPremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td>{language.ll}</td>
            <td colSpan={2}>{language.phoneTower}</td>
            <td className=" text-right">{pt92Count}</td>
            <td className=" text-right">
              {pt92 ? pt92.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{pt95Count}</td>
            <td className=" text-right">
              {pt95 ? pt95.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{ptDieselCount}</td>
            <td className=" text-right">
              {ptDiesel ? ptDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{ptPremiumCount}</td>
            <td className=" text-right">
              {ptPremium ? ptPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{ptcount ? ptcount : "00.000"}</td>
                  <td>{(pt92 + pt95 + ptDiesel + ptPremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td className="bg-white">{language.mm}</td>
            <td colSpan={2} className="bg-white">
              {language.industrialZone}
            </td>
            <td className=" text-right">{iz92Count}</td>

            <td className=" text-right">
              {iz92 ? iz92.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{iz95Count}</td>
            <td className=" text-right">
              {iz95 ? iz95.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{izDieselCount}</td>
            <td className=" text-right">
              {izDiesel ? izDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{izPremiumCount}</td>
            <td className=" text-right">
              {izPremium ? izPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{izcount ? izcount : "00.000"}</td>
                  <td>{(iz92 + iz95 + izDiesel + izPremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td rowSpan={9}>{language.nn}</td>
            <td rowSpan={9}>{language.withABucket}</td>
            <td className="text-start">
              ({language.a}) {language.generatorIndustry}
            </td>
            <td className=" text-right">{gi92Count}</td>
            <td className=" text-right">
              {gi92 ? gi92.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{gi95Count}</td>
            <td className=" text-right">
              {gi95 ? gi95.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{giDieselCount}</td>
            <td className=" text-right">
              {giDiesel ? giDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{giPremiumCount}</td>
            <td className=" text-right">
              {giPremium ? giPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{gicount ? gicount : "00.000"}</td>
                  <td>{(gi92 + gi95 + giDiesel + giPremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td className="bg-white text-start">
              ({language.b}) {language.agricultureMachine}
            </td>
            <td className=" text-right">{am92Count}</td>
            <td className=" text-right">
              {am92 ? am92.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{am95Count}</td>
            <td className=" text-right">
              {am95 ? am95.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{amDieselCount}</td>
            <td className=" text-right">
              {amDiesel ? amDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{amPremiumCount}</td>
            <td className=" text-right">
              {amPremium ? amPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{amcount ? amcount : "00.000"}</td>
                  <td>{(am92 + am95 + amDiesel + amPremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td className="text-start">
              ({language.c}) {language.generatorHomeUse}
            </td>
            <td className=" text-right">{g92Count}</td>
            <td className=" text-right">{g92 ? am92.toFixed(3) : "00.000"} </td>
            <td className=" text-right">{g95Count}</td>
            <td className=" text-right">{g95 ? g95.toFixed(3) : "00.000"} </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{gDieselCount}</td>
            <td className=" text-right">
              {gDiesel ? gDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{gPremiumCount}</td>
            <td className=" text-right">
              {gPremium ? gPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{gcount ? gcount : "00.000"}</td>
                  <td>{(g92 + g95 + gDiesel + gPremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td className="bg-white text-start">
              ({language.d}) {language.hospital}
            </td>
            <td className=" text-right">{h92Count}</td>
            <td className=" text-right">{h92 ? h92.toFixed(3) : "00.000"} </td>
            <td className=" text-right">{h95Count}</td>
            <td className=" text-right">{h95 ? h95.toFixed(3) : "00.000"} </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{hDieselCount}</td>
            <td className=" text-right">
              {hDiesel ? hDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{hPremiumCount}</td>
            <td className=" text-right">
              {hPremium ? hPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{hcount ? hcount : "00.000"}</td>
                  <td>{(h92 + h95 + hDiesel + hPremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td className="text-start">
              ({language.e}) {language.school}
            </td>
            <td className=" text-right">{s92Count}</td>
            <td className=" text-right">{s92 ? s92.toFixed(3) : "00.000"} </td>
            <td className=" text-right">{s95Count}</td>
            <td className=" text-right">{s95 ? s95.toFixed(3) : "00.000"} </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{sDieselCount}</td>
            <td className=" text-right">
              {sDiesel ? sDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{sPremiumCount}</td>
            <td className=" text-right">
              {sPremium ? sPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{scount ? scount : "00.000"}</td>
                  <td>{(s92 + s95 + sDiesel + sPremium).toFixed(3)}</td> */}
            <td></td>
          </tr>
          <tr>
            <td className="bg-white text-start">
              ({language.f}) {language.superMarket}
            </td>
            <td className=" text-right">{sm92Count}</td>
            <td className=" text-right">
              {sm92 ? sm92.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{sm95Count}</td>
            <td className=" text-right">
              {sm95 ? sm95.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{smDieselCount}</td>
            <td className=" text-right">
              {smDiesel ? smDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{smPremiumCount}</td>
            <td className=" text-right">
              {smPremium ? smPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{smcount ? smcount : "00.000"}</td>
                  <td>{(sm92 + sm95 + smDiesel + smPremium).toFixed(3)}</td> */}
            <td></td>
          </tr>
          <tr>
            <td className="text-start">
              ({language.g}) {language.hotel}
            </td>
            <td className=" text-right">{ho92Count}</td>
            <td className=" text-right">
              {ho92 ? ho92.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{ho95Count}</td>
            <td className=" text-right">
              {ho95 ? ho95.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{hoDieselCount}</td>
            <td className=" text-right">
              {hoDiesel ? hoDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{hoPremiumCount}</td>
            <td className=" text-right">
              {hoPremium ? hoPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{hocount ? hocount : "00.000"}</td>
                  <td>{(ho92 + ho95 + hoDiesel + hoPremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td className="bg-white text-start">
              ({language.h}) {language.housing}
            </td>
            <td className=" text-right">{hu92Count}</td>
            <td className=" text-right">
              {hu92 ? hu92.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{hu95Count}</td>
            <td className=" text-right">
              {hu95 ? hu95.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{huDieselCount}</td>
            <td className=" text-right">
              {huDiesel ? huDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{huPremiumCount}</td>
            <td className=" text-right">
              {huPremium ? huPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{hucount ? hucount : "00.000"}</td>
                  <td>{(hu92 + hu95 + huDiesel + huPremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td className="text-start">
              ({language.i}) {language.boat}
            </td>
            <td className=" text-right">{b92Count}</td>
            <td className=" text-right">{b92 ? b92.toFixed(3) : "00.000"} </td>
            <td className=" text-right">{b95Count}</td>
            <td className=" text-right">{b95 ? b95.toFixed(3) : "00.000"} </td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{bDieselCount}</td>
            <td className=" text-right">
              {bDiesel ? bDiesel.toFixed(3) : "00.000"}{" "}
            </td>
            <td className=" text-right">{bPremiumCount}</td>
            <td className=" text-right">
              {bPremium ? bPremium.toFixed(3) : "00.000"}{" "}
            </td>
            {/* <td>{bcount ? bcount : "00.000"}</td>
                  <td>{(b92 + b95 + bDiesel + bPremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td colSpan={2}>{language.total}</td>
            <td className=" text-right">{totalCount92}</td>
            <td className=" text-right">{totalCountLiter92.toFixed(3)}</td>
            <td className=" text-right">{totalCount95}</td>
            <td className=" text-right">{totalCountLiter95.toFixed(3)}</td>
            <td className=" text-right">0</td>
            <td className=" text-right">00.000</td>
            <td className=" text-right">{totalCountDiesel}</td>
            <td className=" text-right">{totalCountLiterDiesel.toFixed(3)}</td>
            <td className=" text-right">{totalCountPHSD}</td>
            <td className=" text-right">{totalCountLiterPHSD.toFixed(3)}</td>
            <td></td>
          </tr>
        </table>
      ) : (
        <table id="category_table" ref={tableRef}>
          <tr>
            <th rowSpan={4}>{language.no}</th>
            <th rowSpan={4} colSpan={2}>
              {language.content}
            </th>
            {language.no === "စဉ်" ? (
              <th colSpan={10}>
                {startDate} ရက်နေ့မှ {endDate} ရက်နေ့အထိ
              </th>
            ) : (
              <th colSpan={10}>
                From {startDate} to {endDate}
              </th>
            )}
            <th rowSpan={4}>{language.remark}</th>
          </tr>
          <tr>
            <th colSpan={10}>{language.fuelType}</th>
          </tr>
          <tr>
            <th colSpan={2}>92 Ron</th>
            <th colSpan={2}>95 Ron</th>
            <th colSpan={2}>97 Ron</th>
            <th colSpan={2}>HSD</th>
            <th colSpan={2}>PHSD</th>
          </tr>
          <tr>
            {/* <th colSpan={3}>{language.saleDepartment}</th> */}
            <th colSpan>{language.count}</th>
            <th colSpan>{language.liter}</th>
            <th colSpan>{language.count}</th>
            <th colSpan>{language.liter}</th>
            <th colSpan>{language.count}</th>
            <th colSpan>{language.liter}</th>
            <th colSpan>{language.count}</th>
            <th colSpan>{language.liter}</th>
            <th colSpan>{language.count}</th>
            <th colSpan>{language.liter}</th>
          </tr>
          {/* {ok?.fuelType == "001-Octane Ron(92)"
            ? "92 RON"
            : ok?.fuelType == "002-Octane Ron(95)"
            ? "95 RON"
            : ok?.fuelType == "004-Diesel"
            ? "HSD"
            : ok?.fuelType == "005-Premium Diesel"
            ? "PHSD"
            : ""} */}
          <tr>
            <td>{language.aa}</td>
            <td colSpan={2}>{single}</td>
            <td className=" text-right">
              {
                okData?.filter((e) => e.fuelType === "001-Octane Ron(92)")
                  ?.length
              }
            </td>
            <td className="text-right">
              {okData
                ?.filter((e) => e.fuelType === "001-Octane Ron(92)")
                ?.map((e) => e.saleLiter)
                .reduce((pv, cv) => pv + cv, 0)
                ?.toFixed(3)}
            </td>
            <td className="text-right">{cycle95Count}</td>
            <td className="text-right">
              {okData
                ?.filter((e) => e.fuelType === "002-Octane Ron(95)")
                ?.map((e) => e.saleLiter)
                .reduce((pv, cv) => pv + cv, 0)
                ?.toFixed(3)}
            </td>
            <td className="text-right">0</td>
            <td className="text-right">00.00</td>
            <td className="text-right">{cycleDieselCount}</td>
            <td className="text-right">
              {okData
                ?.filter((e) => e.fuelType === "004-Diesel")
                ?.map((e) => e.saleLiter)
                .reduce((pv, cv) => pv + cv, 0)
                ?.toFixed(3)}
            </td>
            <td className="text-right">{cyclePremiumCount}</td>
            <td className="text-right">
              {okData
                ?.filter((e) => e.fuelType === "005-Premium Diesel")
                ?.map((e) => e.saleLiter)
                .reduce((pv, cv) => pv + cv, 0)
                ?.toFixed(3)}
            </td>
            {/* <td>{cyclecount ? cyclecount : "00.000"}</td> */}
            {/* <td>{(cycle92 + cycle95 + cycleDiesel + cyclePremium).toFixed(3)} </td> */}
            <td></td>
          </tr>
        </table>
      )}
    </div>
  );
}

export default CategoryTable;
