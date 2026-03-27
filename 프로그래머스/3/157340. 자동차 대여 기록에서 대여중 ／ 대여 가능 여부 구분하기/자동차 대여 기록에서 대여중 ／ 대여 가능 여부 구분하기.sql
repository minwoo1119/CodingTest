-- 코드를 입력하세요
SELECT distinct car_id, 
CASE
    WHEN CAR_ID in (
        select car_id from CAR_RENTAL_COMPANY_RENTAL_HISTORY
        where '2022-10-16' between START_DATE and END_DATE
    ) then '대여중'
    else '대여 가능'
END AS AVAILABILITY
from CAR_RENTAL_COMPANY_RENTAL_HISTORY
order by car_id desc