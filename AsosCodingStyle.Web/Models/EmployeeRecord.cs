using System;
using System.Collections.Generic;
using TypeLite;

namespace AsosCodingStyle.Web.Models
{
    [TsClass]
    public class EmployeeRecord
    {
        public EmployeeRecord()
        {
            Benefits = new List<Benefit>();
        }

        public List<Benefit> Benefits { get; set; }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public decimal Salary { get; set; }
    }

    public class Benefit
    {
        public BenefitType Type { get; set; }
        public DateTime? ValidUntil { get; set; }
    }

    public enum BenefitType
    {
        MedicalInsurance,
        TravelInsurance,
        WeeklyMassages,
        FreeCoffee
    }
}