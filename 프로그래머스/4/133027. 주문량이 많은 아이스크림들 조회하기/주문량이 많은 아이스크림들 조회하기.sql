select f.flavor as FLAVOR
from FIRST_HALF f join (
    select SHIPMENT_ID, FLAVOR, SUM(TOTAL_ORDER) as TOTAL_ORDER from JULY
    group by FLAVOR
) j
on f.FLAVOR = j.FLAVOR
order by j.TOTAL_ORDER+f.TOTAL_ORDER desc
limit 3
