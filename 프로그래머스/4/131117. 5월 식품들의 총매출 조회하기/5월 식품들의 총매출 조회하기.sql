select p.PRODUCT_ID, p.PRODUCT_NAME, o.AMOUNT*p.PRICE as TOTAL_SALES
from FOOD_PRODUCT p join 
    (select PRODUCT_ID, SUM(AMOUNT) as AMOUNT, PRODUCE_DATE
    from FOOD_ORDER
    where PRODUCE_DATE like '2022-05%'
    group by PRODUCT_ID
    ) o
on p.PRODUCT_ID = o.PRODUCT_ID
where o.PRODUCE_DATE between '2022-05-01' and '2022-05-31'
order by TOTAL_SALES desc, p.PRODUCT_ID asc
