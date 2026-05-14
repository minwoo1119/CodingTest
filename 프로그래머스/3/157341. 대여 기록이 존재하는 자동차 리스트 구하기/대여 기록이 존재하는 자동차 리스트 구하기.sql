select c.CAR_ID
from CAR_RENTAL_COMPANY_CAR c
join (select * from CAR_RENTAL_COMPANY_RENTAL_HISTORY where START_DATE between '2022-10-01' and '2022-10-30') h
on c.CAR_ID = h.CAR_ID
where c.CAR_TYPE = '세단'
group by c.CAR_ID
order by c.CAR_ID desc