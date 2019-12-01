(ns day-01.core
  (:gen-class))

(defn fuel-required [ mass ] 
  (-> (Integer/parseInt mass)
    (/ 3)
    Math/floor
    (- 2)))

(defn -main [ inputs ] (reduce + 0 (map fuel-required inputs)))
