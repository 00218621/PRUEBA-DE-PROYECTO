using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Proyecto
{
    public partial class frmPrincipal1 : Form
    {
        public frmPrincipal1()
        {
            InitializeComponent();
        }

        private void btnSesion_Click(object sender, EventArgs e)
        {
            using (frmInicioSesion inicio=new frmInicioSesion())
            {
                DialogResult resultado = inicio.ShowDialog();
            }
        }

        private void btnSomos_Click(object sender, EventArgs e)
        {
            tabInicio.SelectedIndex = 0;
        }

        private void frmPrincipal1_Load(object sender, EventArgs e)
        {
            tabInicio.ItemSize = new Size(0, 1);
        }

        private void btnMisionVision_Click(object sender, EventArgs e)
        {
            tabInicio.SelectedIndex = 1;

        }


        private void btnInstagram_Click(object sender, EventArgs e)
        {
            System.Diagnostics.Process.Start("https://www.instagram.com/miculturasv/");
        }
        //https://www.youtube.com/c/MinisteriodeCulturadeElSalvador
        private void btnFacebook_Click(object sender, EventArgs e)
        {
            System.Diagnostics.Process.Start("https://www.facebook.com/miculturasv/");
        }

        private void btnPreguntas_Click(object sender, EventArgs e)
        {
            tabInicio.SelectedIndex = 3;
        }

        private void btnActividades_Click(object sender, EventArgs e)
        {
            tabInicio.SelectedIndex = 4;
            dgvAsistente.DataSource = null;
            dgvAsistente.DataSource = ActividadDAO.ObtenerTodos();
        }
    }
}