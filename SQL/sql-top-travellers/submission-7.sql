select u.name, COALESCE(SUM(r.distance), 0) as travelled_distance from users u
left JOIN rides r ON u.id = r.user_id
group by r.user_id, u.name
order by travelled_distance desc, u.name asc