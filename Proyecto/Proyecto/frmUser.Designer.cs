using System.ComponentModel;

namespace Proyecto
{
    partial class frmUser
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }

            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(frmUser));
            this.tabPrincipal = new System.Windows.Forms.TabControl();
            this.tabModificar = new System.Windows.Forms.TabPage();
            this.btnAgregar = new System.Windows.Forms.Button();
            this.tabEliminar = new System.Windows.Forms.TabPage();
            this.btnElim = new System.Windows.Forms.Button();
            this.tabActualizar = new System.Windows.Forms.TabPage();
            this.label1 = new System.Windows.Forms.Label();
            this.tabInsertar = new System.Windows.Forms.TabPage();
            this.button1 = new System.Windows.Forms.Button();
            this.menuStrip1 = new System.Windows.Forms.MenuStrip();
            this.btnCambio = new System.Windows.Forms.ToolStripMenuItem();
            this.btnModificar = new System.Windows.Forms.ToolStripMenuItem();
            this.btnEliminar = new System.Windows.Forms.ToolStripMenuItem();
            this.btnActualizar = new System.Windows.Forms.ToolStripMenuItem();
            this.btnInsertar = new System.Windows.Forms.ToolStripMenuItem();
            this.tabPrincipal.SuspendLayout();
            this.tabModificar.SuspendLayout();
            this.tabEliminar.SuspendLayout();
            this.tabActualizar.SuspendLayout();
            this.tabInsertar.SuspendLayout();
            this.menuStrip1.SuspendLayout();
            this.SuspendLayout();
            // 
            // tabPrincipal
            // 
            this.tabPrincipal.Controls.Add(this.tabModificar);
            this.tabPrincipal.Controls.Add(this.tabEliminar);
            this.tabPrincipal.Controls.Add(this.tabActualizar);
            this.tabPrincipal.Controls.Add(this.tabInsertar);
            this.tabPrincipal.ItemSize = new System.Drawing.Size(96, 24);
            this.tabPrincipal.Location = new System.Drawing.Point(12, 85);
            this.tabPrincipal.Name = "tabPrincipal";
            this.tabPrincipal.SelectedIndex = 0;
            this.tabPrincipal.Size = new System.Drawing.Size(609, 328);
            this.tabPrincipal.SizeMode = System.Windows.Forms.TabSizeMode.Fixed;
            this.tabPrincipal.TabIndex = 1;
            // 
            // tabModificar
            // 
            this.tabModificar.Controls.Add(this.btnAgregar);
            this.tabModificar.Location = new System.Drawing.Point(4, 28);
            this.tabModificar.Name = "tabModificar";
            this.tabModificar.Padding = new System.Windows.Forms.Padding(3);
            this.tabModificar.Size = new System.Drawing.Size(601, 296);
            this.tabModificar.TabIndex = 0;
            this.tabModificar.Text = "Modificar";
            this.tabModificar.UseVisualStyleBackColor = true;
            // 
            // btnAgregar
            // 
            this.btnAgregar.Location = new System.Drawing.Point(159, 125);
            this.btnAgregar.Name = "btnAgregar";
            this.btnAgregar.Size = new System.Drawing.Size(266, 77);
            this.btnAgregar.TabIndex = 0;
            this.btnAgregar.Text = "Agregar";
            this.btnAgregar.UseVisualStyleBackColor = true;
            // 
            // tabEliminar
            // 
            this.tabEliminar.Controls.Add(this.btnElim);
            this.tabEliminar.Location = new System.Drawing.Point(4, 28);
            this.tabEliminar.Name = "tabEliminar";
            this.tabEliminar.Padding = new System.Windows.Forms.Padding(3);
            this.tabEliminar.Size = new System.Drawing.Size(601, 296);
            this.tabEliminar.TabIndex = 1;
            this.tabEliminar.Text = "Eliminar";
            this.tabEliminar.UseVisualStyleBackColor = true;
            // 
            // btnElim
            // 
            this.btnElim.Location = new System.Drawing.Point(330, 225);
            this.btnElim.Name = "btnElim";
            this.btnElim.Size = new System.Drawing.Size(65, 32);
            this.btnElim.TabIndex = 0;
            this.btnElim.Text = "Eliminar";
            this.btnElim.UseVisualStyleBackColor = true;
            // 
            // tabActualizar
            // 
            this.tabActualizar.Controls.Add(this.label1);
            this.tabActualizar.Location = new System.Drawing.Point(4, 28);
            this.tabActualizar.Name = "tabActualizar";
            this.tabActualizar.Padding = new System.Windows.Forms.Padding(3);
            this.tabActualizar.Size = new System.Drawing.Size(601, 296);
            this.tabActualizar.TabIndex = 2;
            this.tabActualizar.Text = "Actualizar";
            this.tabActualizar.UseVisualStyleBackColor = true;
            // 
            // label1
            // 
            this.label1.Location = new System.Drawing.Point(131, 135);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(237, 125);
            this.label1.TabIndex = 0;
            this.label1.Text = "Actualizar";
            // 
            // tabInsertar
            // 
            this.tabInsertar.Controls.Add(this.button1);
            this.tabInsertar.Location = new System.Drawing.Point(4, 28);
            this.tabInsertar.Name = "tabInsertar";
            this.tabInsertar.Padding = new System.Windows.Forms.Padding(3);
            this.tabInsertar.Size = new System.Drawing.Size(601, 296);
            this.tabInsertar.TabIndex = 3;
            this.tabInsertar.Text = "Insertar";
            this.tabInsertar.UseVisualStyleBackColor = true;
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(227, 59);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(236, 29);
            this.button1.TabIndex = 0;
            this.button1.Text = "Insert";
            this.button1.UseVisualStyleBackColor = true;
            // 
            // menuStrip1
            // 
            this.menuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {this.btnCambio});
            this.menuStrip1.Location = new System.Drawing.Point(0, 0);
            this.menuStrip1.Name = "menuStrip1";
            this.menuStrip1.Size = new System.Drawing.Size(621, 24);
            this.menuStrip1.TabIndex = 1;
            this.menuStrip1.Text = "menuStrip1";
            // 
            // btnCambio
            // 
            this.btnCambio.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {this.btnModificar, this.btnEliminar, this.btnActualizar, this.btnInsertar});
            this.btnCambio.Name = "btnCambio";
            this.btnCambio.Size = new System.Drawing.Size(66, 20);
            this.btnCambio.Text = "Cambios";
            // 
            // btnModificar
            // 
            this.btnModificar.Name = "btnModificar";
            this.btnModificar.Size = new System.Drawing.Size(125, 22);
            this.btnModificar.Text = "modificar";
            this.btnModificar.Click += new System.EventHandler(this.btnModificar_Click);
            // 
            // btnEliminar
            // 
            this.btnEliminar.Name = "btnEliminar";
            this.btnEliminar.Size = new System.Drawing.Size(125, 22);
            this.btnEliminar.Text = "eliminar";
            this.btnEliminar.Click += new System.EventHandler(this.btnEliminar_Click);
            // 
            // btnActualizar
            // 
            this.btnActualizar.Name = "btnActualizar";
            this.btnActualizar.Size = new System.Drawing.Size(125, 22);
            this.btnActualizar.Text = "actualizar";
            this.btnActualizar.Click += new System.EventHandler(this.btnActualizar_Click);
            // 
            // btnInsertar
            // 
            this.btnInsertar.Name = "btnInsertar";
            this.btnInsertar.Size = new System.Drawing.Size(125, 22);
            this.btnInsertar.Text = "insertar";
            this.btnInsertar.Click += new System.EventHandler(this.btnInsertar_Click);
            // 
            // frmUser
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(621, 450);
            this.Controls.Add(this.tabPrincipal);
            this.Controls.Add(this.menuStrip1);
            this.Icon = ((System.Drawing.Icon) (resources.GetObject("$this.Icon")));
            this.MainMenuStrip = this.menuStrip1;
            this.Name = "frmUser";
            this.Text = "Usuario";
            this.Load += new System.EventHandler(this.frmUser_Load);
            this.tabPrincipal.ResumeLayout(false);
            this.tabModificar.ResumeLayout(false);
            this.tabEliminar.ResumeLayout(false);
            this.tabActualizar.ResumeLayout(false);
            this.tabInsertar.ResumeLayout(false);
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();
        }

<<<<<<< HEAD
=======
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button button1;

        private System.Windows.Forms.Button btnElim;

        private System.Windows.Forms.TabPage tabActualizar;
        private System.Windows.Forms.TabPage tabInsertar;
        private System.Windows.Forms.Button btnAgregar;

        private System.Windows.Forms.MenuStrip menuStrip1;
        private System.Windows.Forms.ToolStripMenuItem btnCambio;
        private System.Windows.Forms.ToolStripMenuItem btnModificar;
        private System.Windows.Forms.ToolStripMenuItem btnEliminar;
        private System.Windows.Forms.ToolStripMenuItem btnActualizar;
        private System.Windows.Forms.ToolStripMenuItem btnInsertar;

        private System.Windows.Forms.TabControl tabPrincipal;
        private System.Windows.Forms.TabPage tabModificar;
        private System.Windows.Forms.TabPage tabEliminar;

>>>>>>> David
        #endregion
    }
}